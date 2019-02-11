import React, { Component } from 'react';

import {
    BrowserRouter as Router,
    Route,
    Link,
    NavLink
  } from "react-router-dom";
  
  import { connect } from "react-redux";
  
  import {loginAction} from '../actions';

class Login extends React.Component {
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
          ...this.state,
          
          user: {
          ...this.state.user,
          [e.target.name]: e.target.value
          }
        });
      };


      gogoLogin = event => {
        event.preventDefault();
        this.props.loginAction(this.state.user);
      }

render () {
    return (
      <div>
        
          <div>

          

          <form onSubmit={this.gogoLogin}>
            <p>
            Login to bookr
            </p>

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
            <p>Not registered yet?  Please register here:</p>
            
          </form>

          {/* <div className="nav-links">
                  <NavLink exact to="/">
                    Home
                  </NavLink>
                  <NavLink to="/Shop">Shop</NavLink>
                </div>
              

              <Route exact path="/" component={App} />
              <Route
                exact path="/Register"
                render={props => <Register />}
              /> */}
              

            <p>{this.props.isLoggedIn && (
              <h2>Hey, you're LOGGED In!</h2>
            )}</p>

            <p>{this.props.isLoggedIn && (
              <h2>Hey, you're NOT logged In!</h2>
            )}</p>

          </div>
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
  
  export default connect (mapStoreToProps, { loginAction })(Login);