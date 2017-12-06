import React from 'react';
import ReactDOM from 'react-dom';
import { connect, Provider } from 'react-redux';
import configureStore from './store/store';

import './scss/base.scss';

import Header from './components/Header';

let store = configureStore({});

export class WebApp extends React.Component{
  componentDidMount() {
    console.log('Wtf');
  }
  render() {
    return (
      <Provider store={store}>
        <Header />
      </Provider>
    )
  }
}

ReactDOM.render(<WebApp ref={instance => {
  if (instance) {
    // do something
  }
}}/>, document.getElementById('webapp'), function() {
  console.log(this); // instance
});
