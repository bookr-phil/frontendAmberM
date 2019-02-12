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

import Register from './components/register';
import BookMain from './components/BooksMain';


class App extends Component {
  constructor() {
    super()

    

  }



  render() {
    return (
      <div className="App">
        <div>
          <header>
            
            {/* <Login />
            <p>OR</p>
            <Register /> */}

            
          </header>
        </div>
        <div>
          <Route exact path="/" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/home" component= {BookMain} />
          
        </div>
      </div>
    );

  }
}

const mapStoreToProps = state => {
  return {
    user: state.login.user,
    
  };
};

export default connect (mapStoreToProps, { })(App);