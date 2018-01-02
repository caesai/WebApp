import React from 'react'
import { connect } from 'react-redux'
import {withRouter} from 'react-router-dom';

export default function requireAuthentication(Component) {

  class AuthenticatedComponent extends React.Component {
    componentWillMount() {
      this.checkAuth(this.props.user)
    }
    componentWillReceiveProps(nextProps) {
      this.checkAuth(nextProps.user);
    }
    checkAuth(user) {
      if (!user.isAuthenticated) {
        setTimeout(()=>{
          this.props.history.push('/');
        },2000);
      }
    }
    render() {
      return (
        <div>
          {this.props.user.isAuthenticated === true
            ? <Component {...this.props} />
            :
            <div className='container'>
              <p>You need to be authenticated to see this page content</p>
            </div>
          }
        </div>
      )
    }
  }

  function mapStateToProps(state) {
    return {
      user: state.user
    }
  }

  return withRouter(connect(mapStateToProps)(AuthenticatedComponent));
}
