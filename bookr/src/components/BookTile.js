import React, { Component } from 'react';
import '../App.css';

import Image0 from './Image1.jpg';
import Image1 from './Image2.jpg';
import Image2 from './Image3.jpg';

import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink
} from "react-router-dom";

import { connect } from "react-redux";

import {getReviews} from '../actions';

//export const bookInfo = this.props.item;

var widget1 = Math.floor(Math.random() * 2);

//console.log(widget1);

const widget2 = `Image${widget1}`;

// try numero 2

var myPix = new Array({Image0},{Image1},{Image2});

var randomPic = Math.floor(Math.random() * myPix.length)

console.log(myPix[randomPic]);

const piccy = {Image1};
function picThing() {
    
}



class BookTile extends React.Component {
    
    constructor(props) {
        super(props)

        this.state = {
            book: this.props.item,
            bookImg: myPix[randomPic]
        }
    }

    render() {
        return(
            <div className="cards-container">
                <NavLink to={`/home/${this.state.book.id}`}>
            
                    <div>
                        <img className="mainImg" src={Image2} />
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