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
import ReviewsList from './ReviewsList';

class Item extends React.Component {
    constructor(props) {
        super(props)

        this.state ={
            reviews: props.reviews,
            
        }

    }
    
    componentDidMount() {
        this.props.getBooks();
        this.props.getReviews();
    }
    

    render(){

        const items = this.props.books;

        const item = items.find(thing => `${thing.id}` === this.props.match.params.id);

        const reviews = this.props.reviews;

        const revResult = reviews.filter(rev => rev.books_id === item.id);

        //console.log(this.props.reviews);
        console.log(revResult);
        
        if (!item) return <h2>No item here... bye, Felicia. </h2>;


        return(
            <div>
            <div >
                <p></p>
                <h2>{item.title}</h2>
                <h4>Written By: {item.author}</h4>
                <p></p>
                <h5>Published by: {item.publisher}</h5>
                <p>Summary: {item.summary}</p>
            </div>

            <div>
                <h3>Reviews</h3>
                <p>------------------</p>
                <ReviewsList reviewsey={revResult}/>

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
      books: state.books.books,
      reviews: state.reviews.reviews
    };
  };
  
  export default connect (mapStoreToProps, { getBooks, getReviews })(Item) ;