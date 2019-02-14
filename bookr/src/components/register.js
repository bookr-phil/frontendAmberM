import React, { Component } from 'react';

import {
    BrowserRouter as Router,
    Route,
    Link,
    NavLink
  } from "react-router-dom";
  
  import { connect } from "react-redux";
  
  import {registerAction} from '../actions';

class Register extends React.Component {
    constructor() {
        super()
    
        this.state = {
          user: {
          username: '',
          password: '',
          role: 0
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


      gogoRegister = event => {
        event.preventDefault();
        this.props.registerAction(this.state.user);
      }

render () {
    return (
      <div className='itemDisplay3'>
        
          <div>

          

          <form onSubmit={this.gogoRegister}>
            <p>
            Register as a new user on bookr
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
              REGISTER
            </button>
            
            
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
              

            <p>{this.props.isRegistered && (
              <div>
              <h2>Hey, you're Registered!</h2>
              <p>Go Back and Login with your new information! <Link to={'/'}>HERE !</Link></p>
              </div>
            )}</p>

            <p>{!this.props.isRegistered && (
              <h2>Register with your new name and password!</h2>
            )}</p>

          </div>
        </div>
    );
  
  }

}

const mapStoreToProps = state => {
    return {
      user: state.register.user,
      error: state.register.error,
      registering: state.register.registering,
      isRegistered: state.register.isRegistered
    };
  };
  
  export default connect (mapStoreToProps, { registerAction })(Register);