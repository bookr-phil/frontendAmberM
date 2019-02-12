import React, { Component } from 'react';
import '../App.css';

import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
  withRouter
} from "react-router-dom";

import { connect } from "react-redux";

import { getBooks, getReviews } from './../actions/index';

function Item (props) {

    //props.getBooks();
    

    console.log(props.match.params.id);

    const items = props.books;

    const item = items.find(thing => `${thing.id}` === props.match.params.id);

    console.log(props.reviews);

    if (!item) return <h2>No item here... bye, Felicia. </h2>;

    
        return(
            <div>
            <div >
                <p>Book Info</p>
                <h2>{item.title}</h2>
                <h4>Written By: {item.author}</h4>
                <p></p>
                <h5>Published by: {item.publisher}</h5>
                <p>Summary: {item.summary}</p>
            </div>

            <div>
                <h3>Reviews</h3>

            </div>

          </div>
        )
}

const mapStoreToProps = state => {
    return {
      user: state.login.user,
      error: state.books.error,
      isLoggedIn: state.isLoggedIn,
      books: state.books.books,
      reviews: state.reviews.reviews
    };
  };
  
  export default connect (mapStoreToProps, { getBooks, getReviews })(Item) ;