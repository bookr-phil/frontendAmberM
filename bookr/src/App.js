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

import {loginAction} from './actions';


class App extends Component {
  constructor() {
    super()

    this.state = {
      user: {
      username: '',
      password: ''
      }
    };

  }

  handleChange = e => {
    this.setState({
      user: {
      ...this.state,
      [e.target.name]: e.target.value
      }
    });
  };

  gogoLogin = event => {
    event.preventDefault();
    this.props.loginAction(this.state.user);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          
          <p>
           Login to bookr
          </p>
          <div>

          <form onSubmit={this.gogoLogin}>
            <input
              type="text"
              name="username"
              placeholder="username"
              onChange={this.handleChange}
              value={this.state.user.username}
            />
            <br></br>
            <input
              type="text"
              name="password"
              placeholder="password"
              onChange={this.handleChange}
              value={this.state.user.password}
            />
            <br></br>
            <button type="submit">
              LOGIN
            </button>
            <p>Don't forget... something</p>
          </form>

            <p>{this.props.isLoggedIn && (
              <h2>Hey, you're logged In!</h2>
            )}</p>

          </div>
          
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

export default connect (mapStoreToProps, { loginAction })(App);
