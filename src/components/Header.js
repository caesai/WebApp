import React from 'react';
import { connect } from 'react-redux';

import {actions} from 'utils/actions';
import {signInPopUp} from 'utils/';

import MainMenu from './header/MainMenu';

const mapStateToProps = (state) => ({
  isAuthenticated: state.user.isAuthenticated,
  userName: state.user.name,
  popUpOpened: state.popups.popUpOpened
})


let Header = class extends React.Component{
  render() {
    return (
      <div className='header'>
        <div className='container'>
          <ul>
            <li><a href='/'>Main Page</a></li>
            <MainMenu />
          </ul>
          <div className='logInBtn'>
            {!this.props.isAuthenticated ?
              <a href='#' onClick={(e)=>{
                e.preventDefault();
                this.props.dispatch(actions.openPopUp(signInPopUp));
              }}>Sign In/Up</a> :
              <div className='userMenu'>
                <p>{this.props.userName}</p>
                <ul className='userMenuList'>
                  <li><a href='/profile'>Profile</a></li>
                  <li onClick={()=>{
                    this.props.dispatch(actions.logout());
                  }}>Log Out</li>
                </ul>
              </div>
            }
          </div>
        </div>
      </div>
    )
  }
}

Header = connect(mapStateToProps)(Header);

export default Header;
