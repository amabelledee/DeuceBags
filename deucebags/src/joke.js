import React, { Component } from 'react';
import unirest from 'unirest'
import './App.css';


class Joke extends Component {
  constructor() {
      super()
      this.state = {
        h1: ''
      }
      this.handleClick = this.handleClick.bind(this)
  }

// handleClick() {
// axios.get('https://icanhazdadjoke.com/accept')
// .then(response => this.setState(console.log(response.data) //{h1: response.data}))
// ))}

handleClick() {
unirest.get("https://icanhazdadjoke.com")
.header("accept", "application/json")

.then(result => this.setState({h1: result.body.joke}))


}


render () {
  return(
  <div>
      <div id="joke" className='container'>
      <h1> {this.state.h1} </h1>
  </div>
  <button className='button1' onClick={this.handleClick}>yes</button>
  
  </div>)
  
};

}
export default Joke;
