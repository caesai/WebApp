import React from 'react';
import { connect } from 'react-redux';

import MainMenu from './header/MainMenu';

const mapStateToProps = (state) => ({
  popUpOpened: state.reducer.popUpOpened
})

const actions = {
  openPopUp: () => ({
    type: 'OPEN_POPUP'
  })
}

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
              this.props.dispatch(actions.openPopUp());
            }}>Sign In/Up</a>
          </div>
        </div>
      </div>
    )
  }
}

Header = connect(mapStateToProps)(Header);

export default Header;
