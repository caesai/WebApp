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
      <div>
        <ul>
          <MainMenu />
        </ul>
        <a href='#' onClick={(e)=>{
          e.preventDefault();
          this.props.dispatch(actions.openPopUp());
        }}>Sign In/Up</a>
      </div>
    )
  }
}

Header = connect(mapStateToProps)(Header);

export default Header;
