import React, { Component } from 'react';
import '../App.css';

import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink
} from "react-router-dom";

import { connect } from "react-redux";


class BookTile extends React.Component {
    constructor(props) {
        super(props)

    }

   

    render() {
        return(
            <div>
            <div className="bookbox">
              <h2>{this.props.item.title}</h2>
              <h4>By: {this.props.item.author}</h4>
              <p></p>
              <h5>{this.props.item.publisher}</h5>
            </div>
          </div>
        )
    }
}

const mapStoreToProps = state => {
    return {
      user: state.login.user,
      error: state.books.error,
      isLoggedIn: state.isLoggedIn,
      books: state.books.books
    };
  };
  
  export default connect (mapStoreToProps, { })(BookTile);