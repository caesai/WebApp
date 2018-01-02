import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import {actions} from './actions';

class signInForm extends React.Component {
  render(){
    return (
      <form onSubmit={(e)=>{
        e.preventDefault();
        let input = e.target.querySelector('input');
        // Fake authentication
        if (input.value !== 'admin') {
          this.props.dispatch(actions.throwPopUpError('Invalid login or password'));
        } else {
          this.props.dispatch(actions.login({
            name: input.value
          }));
          setTimeout(()=>{
            if (this.props.isAuthenticating) {
              this.props.dispatch(actions.auth({
                name: 'admin',
                isAuthenticated: true,
                token: 'serverToken'
              }));
            }
            this.props.dispatch(actions.closePopUp());
          }, 1000);
        }
        // Fake authentication
      }}>
        <p>Enter your login or email</p>
        <input type='text' />
        <p>Enter password</p>
        <input type='password' />
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
