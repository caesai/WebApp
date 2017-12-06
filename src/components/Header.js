import React from 'react';
import { connect } from 'react-redux';

import MainMenu from './header/MainMenu';

const mapStateToProps = (state) => ({
  popUpOpened: state.reducer.popUpOpened
})

class Header extends React.Component{
  render() {
    return (
      <div>
        <ul>
          <MainMenu />
        </ul>
        <a href='#'>Sign In/Up</a>
      </div>
    )
  }
}

Header = connect(mapStateToProps)(Header);

export default Header;
