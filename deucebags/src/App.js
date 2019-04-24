import React, { Component } from 'react';
import './App.css';
import Buttons from './components/Buttons';
import Showform from './components/apicomps/showform'
import Showdiary from './components/apicomps/showdiary'
import unirest from 'unirest';
import axios from 'axios';
import NavComponent from './components/Navbar';
import Registration from './components/Registration';

// Component for buttons and display text
class App extends Component {

  constructor(props, context) {
    super(props, context)
    this.state = {
      h1: '',
      h2: '',
      authenticated: false,
      items: [],
      show: false,
      showRegistraion: false
    }
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.jokeClick = this.jokeClick.bind(this)
    this.complimentClick = this.complimentClick.bind(this)
    this.quoteClick = this.quoteClick.bind(this)
    this.handleShow = this.handleShow.bind(this)
    this.handleClose = this.handleClose.bind(this)
  }

  // method for modal
  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
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
        <NavComponent 
        handleClose={this.handleClose}
        handleShow={this.handleShow}
        />
        <Registration 
          show={this.state.show}
          handleClose={this.handleClose}
          handleShow={this.handleShow}
          showRegistraion={this.state.showRegistraion}
          />
        <div className="App">
          {/* Header   */}
          <div className="header">
            header can go
        </div>
          {/* Button component rendered here */}
          <React.Fragment>
            <Buttons
              jokeClick={this.jokeClick}
              complimentClick={this.complimentClick}
              quoteClick={this.quoteClick} />
//             <Showform />
              <Showdiary />
       
          </React.Fragment>
        </div>

        {/* display field */}
        <React.Fragment>
          <div className='container'>
            <h1> {this.state.h1} </h1>
            {/* this is needed for quote API to GET author */}
            <h2> {this.state.h2} </h2>
          </div>
        </React.Fragment>

      </React.Fragment>

    );
  }
}

export default App;