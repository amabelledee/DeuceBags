import React, { Component } from 'react';
import './App.css';
import Buttons from './components/Buttons';
import Journal from './components/Journal';
import Showdiary from './components/apicomps/showdiary';
import unirest from 'unirest';
import axios from 'axios';
import NavComponent from './components/Navbar';
import Registration from './components/Registration';
import Container from 'react-bootstrap/Container';
import Footer from './components/Footer';
// import ChatButton from './components/ChatButton';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { databaseBase, firebase } from './base';
import Dashboard from './components/Dasboard';

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

      .then(result => this.setState({ h1: result.body.joke, h2: '',
      showResults: false
    }))
  }

  // methold for generating compliment
  complimentClick() {
    axios.get('https://complimentr.com/api')
      .then(response2 => this.setState({ h1: response2.data.compliment, h2: '',
      showResults: false
    }))
  }

  // method for generating quote
  quoteClick() {
    axios.get('http://quotes.rest/qod.json')
      .then(response => this.setState({ h1: response.data.contents.quotes[0].quote, h2: response.data.contents.quotes[0].author,
        showResults: false
      }))
  }

  // methods for registration
  handleCreateUserEmailChange = (event) => {
    console.log(event.target.value)
    this.setState({ createUserEmail: event.target.value });
  }

  handleCreateUserPasswordChange = (event) => {
    console.log(event.target.value)
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
      this.setState({show: false})
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

  signIn = (event) => {
    event.preventDefault()
    const promise = firebase.auth().signInWithEmailAndPassword(this.state.signInEmail, this.state.signInPassword)
    // promise.catch(e => console.log(e.message))
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

  signOut = () => {
    firebase.auth().signOut()
  }

  componentDidMount() {
    console.log('hello');
    firebase.auth().onAuthStateChanged(firebaseUser => {
      if (firebaseUser) {
        console.log(firebaseUser);
        this.setState({
          authenticated: true,
          uid: firebaseUser.uid
        })
        databaseBase.syncState('/to-do-list', {
          context: this,
          state: 'items',
          asArray: true,
          keepKeys: true,
          queries: {
            orderByChild: 'uid',
            equalTo: this.state.uid
          }
        });
      } else {
        console.log('not logged in');
        this.setState({ authenticated: false })
      }
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
          emailChange={this.handleCreateUserEmailChange}
          passwordChange={this.handleCreateUserPasswordChange}
          createAccount={this.createUser}
          show={this.state.show}
          handleClose={this.handleClose}
          handleShow={this.handleShow}
          showRegistraion={this.state.showRegistraion}
        />

        {/* display field */}
        <React.Fragment>
          <Container>
            <Row>
              <Col xs={6} md={3}>
                {/* Button component rendered here */}
                <Buttons
                  jokeClick={this.jokeClick}
                  complimentClick={this.complimentClick}
                  quoteClick={this.quoteClick}
                  ventClick={this.ventClick} />
              </Col>
              <Col>
                <Container>
                  <div className="displayText">
                    <div> 
                    {this.state.showResults ? <Journal /> : this.state.h1}
                    {/* {this.state.h1} */}
                      {/* this is needed for quote API to GET author */}
                      <div> {this.state.h2} </div>
                      {/* {this.state.showResults ? <Journal /> : null} */}
                    </div>
                  </div>
                </Container>
              </Col>
            </Row>
          </Container>
          <Showdiary />

        </React.Fragment>

        {/* <React.Fragment>
          <ChatButton></ChatButton>
        </React.Fragment> */}

        <React.Fragment>
          <Footer>

          </Footer>
        </React.Fragment>

        <React.Fragment>

          {/* Authentication  */}
          <div className="dashed-container">

            {this.state.authenticated === false &&
              <div>
                <form id="create-user-form" onSubmit={this.createUser}>
                  <h2>Create user</h2>
                  <input value={this.state.value} onChange={this.handleCreateUserEmailChange} type="email" placeholder="Email" required></input>
                  <input value={this.state.value} onChange={this.handleCreateUserPasswordChange} type="password" placeholder="Password" required></input>
                  <button id="sign-up-button" type="submit">Sign Up</button>
                </form>

                <form id="sign-in-form" onSubmit={this.signIn}>
                  <h2>Sign in</h2>
                  <input value={this.state.value} onChange={this.handleLoginEmailChange} type="email" placeholder="Email" required></input>
                  <input value={this.state.value} onChange={this.handleLoginPasswordChange} type="password" placeholder="Password" required></input>
                  <button id="signIn-button" type="submit">Log In</button>
                </form>

                <p id="errors">{this.state.error}</p>

              </div>
            }
            {this.state.authenticated === true &&
              <button id="sig-out-button" onClick={this.signOut}>Log Out</button>
            }
          </div>

          {/* Errors  */}
          {
            (this.state.authenticated === false)
              ? <div>status <span className="status-red">not authenticated</span></div>
              : <div>status <span className="status-green">authenticated</span></div>
          }

          {this.state.authenticated === true &&
            <Dashboard
              uid={this.state.uid}
              items={this.state.items}
            />
          }
        </React.Fragment>
      </React.Fragment>
    );
  }
}

export default App;