import React from 'react';
import { connect } from 'react-redux';

import {actions} from 'utils/actions';
import {signInPopUp} from 'utils/';

import MainMenu from './header/MainMenu';

const mapStateToProps = (state) => ({
  popUpOpened: state.popups.popUpOpened
})


let Header = class extends React.Component{
  render() {
    return (
      <div className='header'>
        <div className='container'>
          <ul>
            <MainMenu />
          </ul>
          <div className='logInBtn'>
            <a href='#' onClick={(e)=>{
              e.preventDefault();
              this.props.dispatch(actions.openPopUp(signInPopUp));
            }}>Sign In/Up</a>
          </div>
        </div>
      </div>
    )
  }
}

Header = connect(mapStateToProps)(Header);

export default Header;
