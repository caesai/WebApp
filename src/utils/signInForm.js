import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import {actions} from './actions';

class signInForm extends React.Component {
  render(){
    console.log(this.props);
    return (
      <form onSubmit={(e)=>{
        e.preventDefault();
        let input = e.target.querySelector('input');

        if (input.value !== 'admin') {
          this.props.dispatch(actions.throwPopUpError('Invalid login or password'));
        } else {
          this.props.dispatch(actions.login({
            name: input.value
          }));
          setTimeout(()=>{
            if (this.props.isAuthenticating) {
              this.props.history.push(this.props.redirectingTo);
            }
            this.props.dispatch(actions.closePopUp());
          }, 1000);
        }
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
  isAuthenticating: state.authState.isAuthenticating,
  redirectingTo: state.authState.redirectingTo
});

export default withRouter(connect(authStateToProps)(signInForm));
