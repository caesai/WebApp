import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import {actions} from '../actions';
import {geoClient} from '../utils';

var jwt = require('jsonwebtoken');

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
      return response
  } else {
      var error = new Error(response.statusText)
      error.response = response
      throw error
  }
}

function parseJSON(response) {
  return response.json()
}

class signInForm extends React.Component {
  render(){
    return (
      <form onSubmit={(e)=>{
        e.preventDefault();
        let login = e.target.querySelector('[name="login"]').value.toString();
        let password = e.target.querySelector('[name="password"]').value.toString();
        geoClient.then(api => {
          const signin_request = api.signup(login, password);
          console.log(JSON.parse(signin_request));
          //const signin_url = 'http://188.226.153.11:4000/users/signin';
          const signin_url = 'http://127.0.0.1:4000/users/signin';

          fetch(signin_url, {
            method: 'POST',
            body: signin_request,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
          })
          .then(checkStatus)
          .then(function(response) {
              console.log("Content-Type" + response.headers.get('Content-Type'))
              console.log("Date" + response.headers.get('Date'))
              console.log("Status" + response.status)
              console.log("Status text" + response.statusText)
              return response
          })
          .then(parseJSON)
          .then(function(data) {
            console.log('request succeeded with JSON response', data);           
            var is_admin = data.admin;
            var username = data.username;
            var token = data.token;
          }).catch(function(error) {
            console.log('request failed', error)
          });
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
