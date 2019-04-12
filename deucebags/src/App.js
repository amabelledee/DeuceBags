import React, { Component } from 'react';

import './App.css';
import Joke from './joke'
import Quote from './quote'
import Compliment from './compliment'
import Geo from './geo'




class App extends Component {
  render() {
    return [
      
    <li key="Joke"><Joke /></li>,
    <li key="Quote"><Quote /></li>,
    <li key="Compliment"><Compliment /></li>,
    <li key="Geo"><Geo /></li>,
    ];
}}

export default App;
