import React from 'react';
import {connect} from 'react-redux';

export const actions = {
  openPopUp: (payload) => ({
    type: 'OPEN_POPUP',
    payload
  }),
  closePopUp: () => ({
    type: 'CLOSE_POPUP'
  })
}

const signInForm = () => {
  return (
    <form onSubmit={(e)=>{
      e.preventDefault();
    }}>
      <p>Enter your login or email</p>
      <input type='text' />
      <p>Enter password</p>
      <input type='password' />
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

signInUpBtns = connect(mapStateToProps)(signInUpBtns);

export const signInPopUp = {
  btns: signInUpBtns,
  body: signInForm
}

export const signUpPopUp = {
  btns: signInUpBtns,
  body: signUpForm
}
