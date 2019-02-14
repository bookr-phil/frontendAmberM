import React, { Component } from 'react';
import '../App.css';

import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink
} from "react-router-dom";

import { connect } from "react-redux";

import {getReviews} from '../actions';

//export const bookInfo = this.props.item;

class BookTile extends React.Component {
    
    constructor(props) {
        super(props)

        this.state = {
            book: this.props.item
        }
    }

    render() {
        return(
            <div className="cards-container">
                <NavLink to={`/home/${this.state.book.id}`}>
            
                    <div>
                        
                        <h2>{this.props.item.title}</h2>
                        
                        <h4>By: {this.props.item.author}</h4>
                        
                        <p></p>
                        <h5>{this.props.item.publisher}</h5>
                    </div>

                </NavLink>
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
  
  export default connect (mapStoreToProps, { getReviews })(BookTile);