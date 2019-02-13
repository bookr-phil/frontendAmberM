import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
  withRouter
} from "react-router-dom";

import { connect } from "react-redux";
import Login from './components/Login';

import Register from './components/register';
import BookMain from './components/BooksMain';
import Item from './components/Item';


class App extends Component {
  constructor() {
    super()

  }

  render() {
    return (
      <div>
        <div>
          <header>
            <div>
              <nav>
              <h1 className="base-header">Bookr</h1>
              <div className="nav-links">
              <div>
                  <NavLink exact to="/"> Home </NavLink>
                  </div>
                  <div>
                  <NavLink to="/home"> Books </NavLink>
                  </div>
              </div>
              </nav>
            </div>
            {/* <Login />
            <p>OR</p>
            <Register /> */}

            
          </header>
        </div>
        <div>
          
          <Route exact path="/" component={Login} />
          <Route path="/register" component={Register} />
          <Route exact path="/home" component= {BookMain} />
          <Route path="/home/:id" component={Item} />
          
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

export default withRouter ( connect (mapStoreToProps, { })(App) );