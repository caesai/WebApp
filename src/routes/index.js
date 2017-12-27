import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux';

import MainPage from '../views/MainPage';
import Profile from '../views/Profile';

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated
});

const Routes = () => (
  <Switch>
    <Route exact path='/' component={MainPage} />
    <Route path="/profile" component={Profile} />
  </Switch>
)


export default Routes;
