import React from 'react';
import ReactDOM from 'react-dom';
import { connect, Provider } from 'react-redux';
import { BrowserRouter, withRouter} from 'react-router-dom';
import configureStore from './store/store';

import './scss/base.scss';

import Header from './components/Header';
import Footer from './components/Footer';
import PopUp from './components/PopUp';

import Routes from './routes';

let store = configureStore({});

const mapStateToProps = (state) => ({
  popUpOpened: state.reducer.popUpOpened
})

let Root = class extends React.Component{
  render() {
    return (
        <div>
          <Header />
            <div>
                <Routes />
            </div>
          <Footer />
          {this.props.popUpOpened ? <PopUp /> : null}
        </div>
    )
  }
}

Root = withRouter(connect(mapStateToProps)(Root));

export default class WebApp extends React.Component{
  render() {
    return(
      <Provider store={store}>
        <BrowserRouter>
          <Root />
        </BrowserRouter>
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
