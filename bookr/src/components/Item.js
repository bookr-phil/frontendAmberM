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

import { getBooks, getReviews, giveReviews } from './../actions/index';
import ReviewsList from './ReviewsList';


class Item extends React.Component {
    constructor(props) {
        super(props)

        this.state ={
            reviews: props.reviews,
            newReview: {
                review: '',
                reviewer: 'Me',
                rating: 0,
                books_id: this.props.match.params.id
            }
        }

    }
    
    
    componentDidMount() {
        this.props.getBooks();
        this.props.getReviews();
    }
    
    goReview = event => {
        
        event.preventDefault();
        
        this.props.giveReviews(this.state.newReview);
        
      }

    handleChange = e => {
        this.setState({
          ...this.state,
          
          newReview: {
          ...this.state.newReview,
          [e.target.name]: e.target.value
          }
        });
      };

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

            <div>
                <form onSubmit={this.goReview}>
                    <p>
                    Add New Review
                    </p>

                    <input
                    type="text"
                    name="review"
                    placeholder="Review This book"
                    onChange={this.handleChange}
                    value={this.state.newReview.review}
                    />
                    
                    <br></br>
                    <button type="submit">
                    ADD REVIEW
                    </button>
                    
                    
                </form>
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
  
  export default connect (mapStoreToProps, { getBooks, getReviews, giveReviews })(Item) ;