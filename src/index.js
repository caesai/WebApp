import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/store';

import './scss/base.scss';

import Header from './components/Header';
import Footer from './components/Footer';
import PopUp from './components/PopUp';

let store = configureStore({});

export class WebApp extends React.Component{
  render() {
    return (
      <Provider store={store}>
        <div>
          <Header />
          <Footer />
          <PopUp />
        </div>
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
