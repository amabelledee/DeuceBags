import React, { Component } from 'react';
import './App.css';
import Buttons from './components/Buttons';
import Showform from './components/apicomps/showform'
import unirest from 'unirest';
import axios from 'axios';

// Component for buttons and display text
class App extends Component {
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

  render() {
    return (
      <React.Fragment>
        <div className="App">
          {/* Header   */}
          <div className="header">
            header can go
        </div>
          {/* Button component rendered here */}
          <React.Fragment>
            <Buttons />
            <Showform />
            
          </React.Fragment>
        </div>
      </React.Fragment>
    );
  }
}

export default App;