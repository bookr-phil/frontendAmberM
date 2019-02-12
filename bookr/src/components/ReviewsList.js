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
            reviews: props.reviews
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
                <div >
                    {this.props.reviewsey.map(rev => {
                        return <div>
                        <h3>{rev.review}</h3>
                        <h5>{rev.reviewer}</h5>
                        <br></br>
                        </div>
                    }) }
                </div>

                <div>
                    <h3>New Reviews</h3>
                    

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