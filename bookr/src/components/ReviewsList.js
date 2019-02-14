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


class ReviewsList extends React.Component {
    constructor(props) {
        super(props)

        this.state ={
            reviews: this.props.reviewsey,
            reviewRef: this.props.reviews,
            newReview: {

            }
        }

    }
    
    componentDidMount() {
        //this.props.getBooks();
        this.props.getReviews();
    }
    

    render(){

        console.log(this.props.reviewsey);

        return(
            <div>
                <div className="itemDisplay">
                    {this.props.reviewsey.map(rev => {
                        return <div className ="reviewItem">
                        <p>{rev.review}</p>
                        <h5>By: {rev.reviewer}</h5>
                        <h5>Rating: {rev.rating}</h5>
                        <br></br>
                        </div>
                    }) }
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
  
  export default connect (mapStoreToProps, { getBooks, getReviews })(ReviewsList) ;