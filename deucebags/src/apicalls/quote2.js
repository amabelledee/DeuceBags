import React, { Component } from 'react';
import axios from 'axios'
import './App.css';


class Quote2 extends Component {
  constructor() {
      super()
      this.state = {
        img: ''
      }
      this.handleClick = this.handleClick.bind(this)
  }

handleClick() {
axios.get('https://api.forismatic.com/api/1.0/method=getQuote&format=json&lang=en')
.then(response => this.setState(console.log(response) //{h1: response.data}))
))}





render () {
  return(
  <div>
      <div id="quote2" className='container'>
      <img src={this.state.img} />
  </div>
  <button className='button5' onClick={this.handleClick}>yes</button>
  
  </div>)
  
};

}
export default Quote2;
