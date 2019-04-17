import React from 'react';
import './buttons.css';
import unirest from 'unirest'
import axios from 'axios'

// Component for buttons and display text
class Buttons extends React.Component {
  constructor() {
    super()
    this.state = {
      h1: '',
      h2: ''
    }
    this.jokeClick = this.jokeClick.bind(this)
    this.complimentClick = this.complimentClick.bind(this)
    this.quoteClick = this.quoteClick.bind(this)
  }

  // method for generating joke
  jokeClick() {
    unirest.get("https://icanhazdadjoke.com")
      .header("accept", "application/json")

      .then(result => this.setState({ h1: result.body.joke, h2: '' }))
  }

  // methold for generating compliment
  complimentClick() {
    axios.get('https://complimentr.com/api')
      .then(response2 => this.setState({ h1: response2.data.compliment, h2: '' }))
  }

  // method for generating quote
  quoteClick() {
    axios.get('http://quotes.rest/qod.json')
      .then(response => this.setState({ h1: response.data.contents.quotes[0].quote, h2: response.data.contents.quotes[0].author }))
  }

  // render buttons and display text
  render() {
    return (
      <React.Fragment>
        <div>
          <button id="jokebutton" onClick={this.jokeClick}>Joke</button>
          <button id="compliment" onClick={this.complimentClick}>Compliment</button>
          <button id="quote" onClick={this.quoteClick}>Quotes</button>
        </div>

        {/* display field */}
        <div className='container'>
          <h1> {this.state.h1} </h1>
          {/* this is needed for quote API */}
          <h2> {this.state.h2} </h2>
        </div>
      </React.Fragment>
    )
  };
}
export default Buttons;