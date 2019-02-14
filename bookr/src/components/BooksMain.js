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
import ImageMain from './ImageMain.jpg';
import ImageMain2 from './ImageMain2.jpg';

class BookMain extends React.Component {
    constructor() {
        super()

    }

    componentDidMount() {
        this.props.getBooks();
    }

    render() {
        return(
            <div>
                
                <div >
                    <div className="itemDisplay4">
                    
                        <img className="super" src={ImageMain2} />
                    
                    </div>

                    <div >
                    
                        <div className='content-container'>
                            {this.props.books.map(item => {
                                return <BookTile item={item} key={item.id} />
                                })}
                        </div>
                    </div>
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