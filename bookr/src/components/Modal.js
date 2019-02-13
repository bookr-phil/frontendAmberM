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
import { killBook } from './../actions/index';
import Modal from 'react-modal';


import {getReviews} from '../actions';

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
  };

  class Modaley extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        item: this.props.itemey,
        modalIsOpen: false
      };
  
      this.openModal = this.openModal.bind(this);
      this.afterOpenModal = this.afterOpenModal.bind(this);
      this.closeModal = this.closeModal.bind(this);
    }
  
    openModal() {
      this.setState({modalIsOpen: true});
    }
  
    afterOpenModal() {
      // references are now sync'd and can be accessed.
      this.subtitle.style.color = '#f00';
    }
  
    closeModal() {
      this.setState({modalIsOpen: false});
    }


    goKillbook = (event,widget) => {
        event.preventDefault();
        this.props.killBook(widget)
        setTimeout(() => {
        this.props.history.push('/home')
        } , 1000);
      }
  
    render() {
      return (
        <div>
          <button onClick={this.openModal}>Open Modal</button>
          <Modal
            isOpen={this.state.modalIsOpen}
            onAfterOpen={this.afterOpenModal}
            onRequestClose={this.closeModal}
            style={customStyles}
            contentLabel="Example Modal"
          >
  
            <h2 ref={subtitle => this.subtitle = subtitle}>Are you sure you want to delete?</h2>
            <button onClick={this.closeModal}>Oh Noes, I didn't mean it!</button>
            <br></br>
            <br></br>
            <div>This Action is Permanent!</div>
            <button onClick={e => {this.goKillbook(e, this.state.item)}}>Yep, Get Rid of It</button>
              
            
          </Modal>
        </div>
      );
    }
  }

  const mapStoreToProps = state => {
    return {
      user: state.login.user,
      error: state.books.error,
      
      books: state.books.books,
      
    };
  };
  
  export default withRouter( connect (mapStoreToProps, { killBook })(Modaley) );
