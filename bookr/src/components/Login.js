import React, { Component } from 'react';

import App from '../App';
import Register from '../components/register';

import {
    BrowserRouter as Router,
    Route,
    Link,
    NavLink
  } from "react-router-dom";
  
  import { connect } from "react-redux";
  
  import {loginAction} from '../actions';
  import ImageMain from './ImageMain.jpg';

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

        window.localStorage.setItem('user', this.state.user.username);

        setTimeout(() => {
          if (this.props.isLoggedIn) {
            this.props.history.push('/home')
          } }, 4200);
      }

      

  render () {
    return (
      <div>
      <div className="itemDisplay3">
        
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
            
            
          </form>

          <div>{this.props.LoggingIn && (
                <div className="itemDisplay6 loader">
                  
                </div>
              )}</div>

            
            <div>{this.props.isLoggedIn && (
              <div>
              <h2>Hey, you're already LOGGED In!</h2>
              <p>Go to the main Bookr page <Link to={'/home'}>HERE!</Link></p>
              </div>
            )}</div>

            <div>{!this.props.isLoggedIn && (
              <div>
              <h2>Hey, you're NOT logged In!</h2>
              <p>If you need to register, go <Link to={'/register'}>HERE</Link></p>
              </div>
            )}</div>

          </div>

        </div>
        
        <div className="itemDisplay">
              <br></br>
              
          <img className="itemDisplay6" src={ImageMain} />
        </div>

        </div>
    );
  
  }

}

const mapStoreToProps = state => {
    return {
      user: state.login.user,
      error: state.login.error,
      LoggingIn: state.login.LoggingIn,
      isLoggedIn: state.login.isLoggedIn
    };
  };
  
  export default connect (mapStoreToProps, { loginAction })(Login);