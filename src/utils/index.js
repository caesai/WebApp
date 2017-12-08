import React from 'react';
import {connect} from 'react-redux';

export const actions = {
  openPopUp: (payload) => ({
    type: 'OPEN_POPUP',
    payload
  }),
  closePopUp: () => ({
    type: 'CLOSE_POPUP'
  }),
  throwPopUpError: (errmsg) => ({
    type: 'CATCH_POPUP_ERROR',
    err: errmsg
  })
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
      <p>Enter your email to subscribe</p>
      <input type='text' />
      <p className='errormsg'>{props.err ? props.err : null}</p>
      <button type='submit'>Submit</button>
    </form>
  )
}

let signInForm = (props) => {
  return (
    <form onSubmit={(e)=>{
      e.preventDefault();
      let inputs = e.target.querySelectorAll('input');
      try {
        inputs.forEach((val) => {
          if (val.value !== 'admin') {
            throw e;
          }
        })
      } catch(e) {
        props.dispatch(actions.throwPopUpError('Invalid login or password'));
      }
    }}>
      <p>Enter your login or email</p>
      <input type='text' />
      <p>Enter password</p>
      <input type='password' />
      <button type='submit'>Submit</button>
      <p className='errormsg'>{props.err ? props.err : null}</p>
      <p>Or use your FaceBook account to authorize</p>
    </form>
  )
}

const signUpForm = () => {
  return (
    <form onSubmit={(e)=>{
      e.preventDefault();
    }}>
      <p>Enter your login</p>
      <input type='text' />
      <p>Enter your email</p>
      <input type='text' />
      <p>Enter password</p>
      <input type='password'/>
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
      <h3>Sign Up</h3>
    </div>
  )
}

const mapStateToProps = (state) => ({
  title: state.reducer.popUpBody.title,
  btns: state.reducer.popUpBody.btns,
  body: state.reducer.popUpBody.body
})

const mapErrorsToProps = (state) => ({
  err: state.reducer.err
})

signInUpBtns = connect(mapStateToProps)(signInUpBtns);
signInForm = connect(mapErrorsToProps)(signInForm);
newsLetter = connect(mapErrorsToProps)(newsLetter);

export const signInPopUp = {
  btns: signInUpBtns,
  body: signInForm,
  err: ''
}

export const signUpPopUp = {
  btns: signInUpBtns,
  body: signUpForm,
  err: ''
}

export const newsLetterPopUp = {
  title: 'Subscribe to our newsletter',
  body: newsLetter
}
