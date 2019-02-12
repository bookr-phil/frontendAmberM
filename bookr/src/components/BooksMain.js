import React, { Component } from 'react';
import '../App.css';

import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink
} from "react-router-dom";

import { connect } from "react-redux";
import { getBooks } from './../actions/index';
import BookTile from './BookTile';

class BookMain extends React.Component {
    constructor() {
        super()

    }

    componentDidMount() {
        this.props.getBooks();
    }

    render() {
        return(
            <div className="App">
            <div>
              <header>
                <h1>Bookr Header</h1>   
                
              </header>
            </div>

            <div>
            <h3>Booklist Goes Here</h3>  
            <p>--------------------</p>
            <ul>
                {this.props.books.map(item => {
                    return <BookTile item={item} key={item.id} />
                    })}
            </ul>
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
  
  export default connect (mapStoreToProps, { getBooks })(BookMain);