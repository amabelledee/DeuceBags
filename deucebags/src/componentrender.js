import React, { Component } from 'react';

import './App.css';
import Buttons from './bigboy/combined'
import Geo from './geo'
import Form from './journal'




class Combine extends Component {
  render() {
    return [
      
    <li key="Buttons"><Buttons /></li>,
    <li key="Geo"><Geo /></li>,
    <li key="form"><Form /></li>

    ];
}}

export default Combine;