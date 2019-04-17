import React, { Component } from 'react';
import './App.css';
import Dashboard from './components/Dasboard';
import { databaseBase, firebase } from './base';
import Buttons from './components/Buttons/index'
import Display from './components/Display';
import Combined from './components/apicomps/combined'

class App extends Component {
  constructor() {
    super()
    this.state = {
      authenticated: false,
      items: []
    }
  }

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
      <div className="App">
        {/* Header   */}
        <div className="header">
        What happens when I do this
        </div>

        <React.Fragment>
          <Buttons />
          <Combined />
        </React.Fragment>

        {/* Display Field */}
        <React.Fragment>
          <Display />
        </React.Fragment>

        {/* Authentication  */}
        {/* <div className="dashed-container"> */}

        {/* {this.state.authenticated === false &&
            
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
          } */}
        {/* </div> */}

        {/* Errors  */}

        {/* Registered User Dashboard*/}
        {this.state.authenticated === true &&
          <Dashboard
            uid={this.state.uid}
            items={this.state.items}
          />
        }

      </div>
    </React.Fragment>
    );
  }
}

export default App;