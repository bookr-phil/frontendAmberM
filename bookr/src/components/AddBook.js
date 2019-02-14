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
import { goNewBook} from '../actions';



class Item extends React.Component {
    constructor(props) {
        super(props)

        this.state ={
            
            newBook: {
                title: '',
                author: '',
                publisher: '',
                summary: ""
            }
        }
    }
    
    componentDidMount() {
        //this.props.getBooks();
    }
    
    goReview = event => {
        event.preventDefault();
        this.props.goNewBook(this.state.newBook);
      }

    handleChange = e => {
        this.setState({
          ...this.state,
          
          newBook: {
          ...this.state.newBook,
          [e.target.name]: e.target.value
          }
        });
      };

    render(){

        return(
            <div className ='itemDisplay3'>
                
                <div>
                    <h3>New Book Entry</h3>
                   
                </div>

                <div>
                    <form onSubmit={this.goReview}>
                        <p>
                        Add The Book Information Below:
                        </p>

                        <input
                        type="text"
                        name="title"
                        placeholder="New Book Title"
                        onChange={this.handleChange}
                        value={this.state.newBook.title}
                        />
                        <br></br>

                        <input
                        type="text"
                        name="author"
                        placeholder="New Book Author"
                        onChange={this.handleChange}
                        value={this.state.newBook.author}
                        />
                        <br></br>

                        <input
                        type="text"
                        name="publisher"
                        placeholder="New Book Publisher"
                        onChange={this.handleChange}
                        value={this.state.newBook.publisher}
                        />
                        <br></br>

                        <input
                        type="text"
                        name="summary"
                        placeholder="Book Summary"
                        onChange={this.handleChange}
                        value={this.state.newBook.summary}
                        />
                        <br></br>
                        
                        
                        <br></br>
                        <button type="submit">
                        ADD NEW BOOK
                        </button>
                        
                        
                    </form>
                </div>

                <div>

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
      makingNewBook: state.newbook.makingNewBook,
      madeNewBook: state.newbook.madeNewBook
    };
  };
  
  export default connect (mapStoreToProps, { goNewBook })(Item) ;