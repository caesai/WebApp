import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import {actions} from '../actions';
import {geoClient} from '../utils';

class signInForm extends React.Component {
  render(){
    return (
      <form onSubmit={(e)=>{
        e.preventDefault();
        let login = e.target.querySelector('[name="login"]').value.toString();
        let password = e.target.querySelector('[name="password"]').value.toString();
        geoClient.then(api => {
          const signup_request = api.signup(login, password);
          console.log(JSON.parse(signup_request));
          const signup_url = 'http://188.226.153.11:4000/users/signin';

          fetch(signup_url, {
            method: 'POST',
            body: JSON.parse(signup_request),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
          }).then((response => {
            console.log(response)
          }));
        })
      }}>
        <p>Enter your login or email</p>
        <input name='login' type='text' />
        <p>Enter password</p>
        <input name='password' type='password' />
        <button type='submit'>Submit</button>
        <p className='errormsg'>{this.props.err ? this.props.err : null}</p>
        <p>Or use your FaceBook account to authorize</p>
      </form>
    )
  }
}

const authStateToProps = (state) => ({
  isAuthenticating: state.user.isAuthenticating,
  redirectingTo: state.user.redirectingTo
});

export default withRouter(connect(authStateToProps)(signInForm));
