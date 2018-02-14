import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import {actions} from '../actions';
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
            <li><Link to='/'>Main Page</Link></li>
            <MainMenu />
          </ul>
          <div className='logInBtn'>
            {!this.props.isAuthenticated ?
              <p>
                <a href='#' onClick={(e)=>{
                  e.preventDefault();
                  this.props.dispatch(actions.openPopUp(signInPopUp));
                }}>Sign In/Up</a>
              </p> :
              <div className='userMenu' onClick={(e)=>{
                e.currentTarget.classList.toggle('active');
              }}>
                <p>{this.props.userName}</p>
                <ul className='userMenuList'>
                  <li><Link to='/profile'>Profile</Link></li>
                  <li><Link to='/dashboard'>Dashboard</Link></li>
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
