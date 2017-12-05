import React from 'react';

import MainMenu from './header/MainMenu';

export default class Header extends React.Component{
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
