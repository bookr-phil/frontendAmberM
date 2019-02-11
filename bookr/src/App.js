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
import Login from './components/Login';

import Register from './components/Register';


class App extends Component {
  constructor() {
    super()

    

  }



  render() {
    return (
      <div className="App">
        <header className="App-header">
          
          <Login />
          <p>OR</p>
          <Register />

         

            
          
          
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