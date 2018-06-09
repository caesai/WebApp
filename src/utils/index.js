import React from 'react';
import {connect} from 'react-redux';

import {actions} from '../actions';
import signInForm from './signInForm';

const signUpForm = () => {
  return (
    <form onSubmit={(e)=>{
      e.preventDefault();
    }}>
      <p>Enter your login</p>
      <input type='text' />
      <p>Enter your email</p>
      <input name='login' type='text' />
      <p>Enter password</p>
      <input name='password' type='password'/>
      <p>Confirm your password</p>
      <input type='password'/>
      <button type='submit'>Submit</button>
      <p>Or use your FaceBook account to authorize</p>
    </form>
  )
}

let signInUpBtns = (props) => {
  return (
    <div onClick={(e) => {
      e.currentTarget.querySelector('.active').classList.remove('active');
      if (e.target && e.target.nodeName === 'H3') {
        let btnValue = e.target.innerText;
        e.target.classList.add('active');
        props.dispatch(actions.openPopUp(btnValue === 'Sign Up' ? signUpPopUp :  signInPopUp));
      }
    }}>
      <h3 className='active'>Sign In</h3>
      {/*<h3>Sign Up</h3>*/}
    </div>
  )
}

let newsLetter = (props) => {
  return (
    <form onSubmit={(e)=>{
      e.preventDefault();
      let inputs = e.target.querySelectorAll('input');
      try {
        inputs.forEach((val) => {
          if (val.value === '') {
            throw e;
          }
        })
      } catch(e) {
        props.dispatch(actions.throwPopUpError('Invalid email address'));
      }
    }}>
      <input type='text' placeholder='Enter your email'/>
      {props.err ? <p className='errormsg'> {props.err} </p> : null}
      <button type='submit'>Submit</button>
    </form>
  )
}

const mapStateToProps = (state) => ({
  title: state.popups.popUpBody.title,
  btns: state.popups.popUpBody.btns,
  body: state.popups.popUpBody.body
})

const mapErrorsToProps = (state) => ({
  err: state.popups.err
})

signInUpBtns = connect(mapStateToProps)(signInUpBtns);
newsLetter = connect(mapErrorsToProps)(newsLetter);

export const signInPopUp = {
  btns: signInUpBtns,
  body: signInForm,
  err: ''
}

// export const geoClient = import('../wasm/geoclient.js')
// .then(client => {
//   return client.default;
// })
// .then(api => {
//   return api
// });

export const signUpPopUp = {
  btns: signInUpBtns,
  body: signUpForm,
  err: ''
}

export const newsLetterPopUp = {
  title: 'Subscribe to our newsletter',
  body: newsLetter
}

export function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
      return response
  } else {
      var error = new Error(response.statusText)
      error.response = response
      throw error
  }
}

export function parseJSON(response) {
  return response.json()
}
