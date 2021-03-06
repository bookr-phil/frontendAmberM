import React, { Component } from 'react';
import '../App.css';

import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
  withRouter
} from "react-router-dom";

import Image0 from './Image1.jpg';
import Image1 from './Image2.jpg';
import Image2 from './Image3.jpg';

//import Modal from 'react-modal';

import { connect } from "react-redux";

import { getBooks, getReviews, giveReviews, killBook } from './../actions/index';
import ReviewsList from './ReviewsList';
import Modaley from './Modal';


class Item extends React.Component {
    constructor(props) {
        super(props)

        this.state ={
            reviews: props.reviews,
            itemey: {},
            newReview: {
                review: '',
                reviewer: window.localStorage.getItem('user'),
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

        this.setTimeout((window.location.reload()),800)
                
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

      goKillbook = event => {
        //event.preventDefault();
        this.props.killBook(this.state.itemey)
        this.props.history.push('/home')
      }

    render(){

        const items = this.props.books;

        const item = items.find(thing => `${thing.id}` === this.props.match.params.id);

        if (!item) return <h2>No book here... bye, Felicia. </h2>;

        const reviews = this.props.reviews;

        const revResult = reviews.filter(rev => rev.books_id === item.id);

        this.state.itemey = item;
        //console.log(item);
        //console.log(this.state.itemey);
        
        if (!item) return <h2>No item here... bye, Felicia. </h2>;


        return(
            <div>

                <div className="itemDisplay">

                    <div className="itemDisplay1">
                        <img className="itemImage" src={Image0} />
                    </div>
                    
                    <div className="itemDisplay2">
                        
                        
                        <h2>{item.title}</h2>
                        
                        <h4>Written By: {item.author}</h4>
                        
                        <h5>Published by: {item.publisher}</h5>
                        <p>Summary:<br></br> {item.summary}</p>
                    </div>

                </div>
                <br></br>
                <br></br>
                <div className="itemDisplay">
                <h3>-READER REVIEWS-</h3>
                </div>
                <div >
                    {/* <h3>Reviews</h3>
                    <p>------------------</p> */}
                    <ReviewsList reviewsey={revResult}/>

                </div>

                <div className="itemDisplay3">
                    <form onSubmit={this.goReview}>
                        <p>
                        Add New Review, and Rating.
                        </p>

                        <input
                        type="text"
                        name="review"
                        placeholder="Review This book"
                        onChange={this.handleChange}
                        value={this.state.newReview.review}
                        />
                        <br></br>

                        <input 
                        type="number"
                        name="rating"
                        value={this.state.newReview.rating}
                        
                        onChange={this.handleChange}
                        min="1"
                        max="5"
                        
                        />
                        
                        <br></br>
                        <button type="submit">
                        ADD REVIEW
                        </button>
                        
                        
                    </form>
                </div>

                <div className="itemDisplay">
                    <br></br>
                    <br></br>
                    <h3><br></br>Delete this book?</h3>
                    <br></br>
                    
                    <br></br>
                    <br></br>
                </div>

                <div className="itemDisplay">
                    <br></br>
                    <br></br>
                    
                    <br></br>
                    <Modaley itemey={item}/>
                    <br></br>
                    <br></br>
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
  
  export default connect (mapStoreToProps, { getBooks, getReviews, giveReviews, killBook })(Item) ;