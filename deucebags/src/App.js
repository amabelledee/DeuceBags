import React, { Component } from 'react';
import './App.css';
import Buttons from './components/Buttons';

class App extends Component {

  state = {
    message: ''
  }

  render() {
    return (
      <React.Fragment>
        <div className="App">
          {/* Header   */}
          <h1 className="header">
            header can go here
        </h1>

          {/* Main component rendered here */}
          <React.Fragment>
            <Buttons />
          </React.Fragment>

        </div>
      </React.Fragment>
    );
  }
}

export default App;