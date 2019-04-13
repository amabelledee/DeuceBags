import React, { Component } from 'react';
import unirest from 'unirest'
import axios from 'axios'
import './App.css';


class Joke extends Component {
  constructor() {
      super()
      this.state = {
        h1: ''
      }
      this.handleClick = this.handleClick.bind(this)
      this.handleClick2 = this.handleClick2.bind(this)
      this.handleClick3 = this.handleClick3.bind(this)
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
handleClick2() {
  axios.get('https://complimentr.com/api')
  .then(response2 => this.setState({h1: response2.data.compliment}))
  }

  handleClick3() {
    axios.get('http://quotes.rest/qod.json')
    .then(response => this.setState({h1: response.data.contents.quotes[0].quote, h2: response.data.contents.quotes[0].author}))
    }


render () {
  return(
  <div>
      <div  className='container'>
      <h1> {this.state.h1} </h1>
      <h2> {this.state.h2} </h2>
  </div>
  <button className='button1' id="jokebutton" onClick={this.handleClick}>yes</button>
  <button className="button3" id="compliment" onClick={this.handleClick2}>yes2</button>
  <button id="quote" onClick={this.handleClick3}>yes3</button>
  </div>)
  
};

}
export default Joke;
