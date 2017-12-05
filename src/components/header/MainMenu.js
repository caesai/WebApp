import React from 'react';

export default class MainMenu extends React.Component{
  render() {
    return [
      <li key="1">Statement</li>,
      <li key="2">News</li>,
      <li key="3">Whitepaper</li>,
      <li key="4">Roadmap</li>,
      <li key="5">Rules</li>
    ]
  }
}
