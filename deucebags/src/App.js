import React, { Component } from 'react';

import './App.css';
import Buttons from './buttons/buttons'
import Geo from './geo'
import Form from './journal'




class App extends Component {
  render() {
    return [
      
    <li key="Buttons"><Buttons /></li>,
    <li key="Geo"><Geo /></li>,
    <li key="form"><Form /></li>

    ];
}}

export default App;
