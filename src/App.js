import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import './App.module.css'
// import ServiceApi from 'components/Service-api';
import Container from 'components/Container';
import Searchbar from 'components/Searchbar';



export default class App extends Component {
  state={
    query: ''
  };

handleFormSubmit = query=>{
 this.setState({query});
}

  render(){
    return (
      <Container>
      <Searchbar onSubmit={this.handleFormSubmit}/>
      <ToastContainer autoClose={3000}/>
      </Container>
   );
 }
  }
  
