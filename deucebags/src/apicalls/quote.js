import React, { Component } from 'react';
import axios from 'axios'
import './App.css';


class Quote extends Component {
  constructor() {
      super()
      this.state = {
        h1: ''
      }
      this.handleClick = this.handleClick.bind(this)
  }

handleClick() {
axios.get('http://quotes.rest/qod.json')
.then(response => this.setState({h1: response.data.contents.quotes[0].quote, h2: response.data.contents.quotes[0].author}))
}




render () {
  return(
  <div>
      <div id="joke" className='container'>
      <h1> {this.state.h1} </h1>
      <h2> {this.state.h2} </h2>
  </div>
  <button className='button2' onClick={this.handleClick}>yes</button>
  
  </div>)
  
};

}
export default Quote;