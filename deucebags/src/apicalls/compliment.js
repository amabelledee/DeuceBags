import React, { Component } from 'react';
import axios from 'axios'
import './App.css';


class Compliment extends Component {
  constructor() {
      super()
      this.state = {
        h1: ''
      }
      this.handleClick = this.handleClick.bind(this)
  }

handleClick() {
axios.get('https://complimentr.com/api')
.then(response => this.setState({h1: response.data.compliment}))
}




render () {
  return(
  <div>
      <div id="compliment" className='container'>
      <h1> {this.state.h1}  </h1>
  </div>
  <button className='button3' onClick={this.handleClick}>yes</button>
  
  </div>)
  
};

}
export default Compliment;