import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink
} from "react-router-dom";

import { connect } from "react-redux";


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          
          <p>
           Login to bookr
          </p>
          
        </header>
      </div>
    );
  }
}

const mapStoreToProps = state => {
  return {
    user: state.user,
    error: state.error,
    LoggingIn: state.LoggingIn,
    isLoggedIn: state.isLoggedIn
  };
};

export default connect (mapStoreToProps, { })(App);
