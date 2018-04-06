import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import {actions} from '../actions';
import {signinUrl} from '../constants';
import {geoClient, checkStatus, parseJSON} from '../utils';

var jwt = require('jsonwebtoken');

class signInForm extends React.Component {
  render(){
    return (
      <form onSubmit={(e)=>{
        e.preventDefault();
        let login = e.target.querySelector('[name="login"]').value.toString();
        let password = e.target.querySelector('[name="password"]').value.toString();
        geoClient.then(api => {
          const signin_request = api.signup(login, password);

          fetch(signinUrl, {
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
          .then((data) => {
            console.log('request succeeded with JSON response', data);
            this.props.dispatch(actions.auth(data));
            this.props.dispatch(actions.closePopUp());
          }).catch(function(error) {
            console.log('request failed', error)
          });
        })
      }}>
        <input name='login' type='text' placeholder='Enter login'/>
        <input name='password' type='password' placeholder='Enter password' />
        <button type='submit'>Submit</button>
        {this.props.err ? <p className='errormsg'>{this.props.err}</p>: null}
      </form>
    )
  }
}

const authStateToProps = (state) => ({
  isAuthenticating: state.user.isAuthenticating,
  redirectingTo: state.user.redirectingTo
});

export default withRouter(connect(authStateToProps)(signInForm));
