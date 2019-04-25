import React, { Component } from 'react';
import './App.css';
import Buttons from './components/Buttons';
import Journal from './components/apicomps/journal'
import Showdiary from './components/apicomps/showdiary'
import unirest from 'unirest';
import axios from 'axios';
import NavComponent from './components/Navbar';
import Registration from './components/Registration';
import Container from 'react-bootstrap/Container';
import Footer from './components/Footer';
import ChatButton from './components/ChatButton';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { databaseBase, firebase } from './base'

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
      showRegistraion: false,
      showResults: false
    }
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.jokeClick = this.jokeClick.bind(this)
    this.complimentClick = this.complimentClick.bind(this)
    this.quoteClick = this.quoteClick.bind(this)
    this.handleShow = this.handleShow.bind(this)
    this.handleClose = this.handleClose.bind(this)
    this.ventClick = this.ventClick.bind(this)
  }

  // method for vent
  ventClick() {
    this.setState({ showResults: !this.state.showResults })
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

  // methods for registration
  handleCreateUserEmailChange = (event) => {
    this.setState({ createUserEmail: event.target.value });
  }

  handleCreateUserPasswordChange = (event) => {
    this.setState({ createUserPassword: event.target.value });
  }

  handleLoginEmailChange = (event) => {
    this.setState({ signInEmail: event.target.value });
  }

  handleLoginPasswordChange = (event) => {
    this.setState({ signInPassword: event.target.value });
  }

  createUser = (event) => {
    event.preventDefault()
    const promise = firebase.auth().createUserWithEmailAndPassword(this.state.createUserEmail, this.state.createUserPassword)
    // promise.catch(e => console.log(e.message))
    promise.then(() => {
      firebase.auth().currentUser.updateProfile({
        displayName: this.state.displayName
      })
    })

    promise.catch(e => {
      console.log(e.message)
      this.setState({
        error: e.message
      })
      setTimeout(() => {
        this.setState({
          error: ""
        })
      }, 3000)
    })
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

        {/* display field */}
        <React.Fragment>
          <Container >
            <Row>
              <Col>
                {/* Button component rendered here */}
                <Buttons
                  jokeClick={this.jokeClick}
                  complimentClick={this.complimentClick}
                  quoteClick={this.quoteClick} 
                  ventClick={this.ventClick}/>
              </Col>
              <Col>
                <h1> {this.state.h1} </h1>
                {/* this is needed for quote API to GET author */}
                <h2> {this.state.h2} </h2>
                <div>
                {this.state.showResults ? <Journal /> : null}
                </div>
              </Col>
            </Row>
          </Container>
          <Showdiary />

        </React.Fragment>

        <React.Fragment>
          <ChatButton></ChatButton>
        </React.Fragment>

        <React.Fragment>
          <Footer>

          </Footer>
        </React.Fragment>

      </React.Fragment >

    );
  }
}

export default App;