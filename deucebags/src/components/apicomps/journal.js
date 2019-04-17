import React, { Component } from 'react';

import './App.css';


class Form extends Component {
    constructor() {
      super();
      this.state = {
        p: ''
      };
  
      this.handleChange = this.handleChange.bind(this);
      
    }
  
    handleChange(event) {
      this.setState({p: event.target.value});
    }
  
    handleSubmit(event) {
      alert('An essay was submitted: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <form action="/neverland.pcp" onSubmit={this.handleSubmit}>
          <label><p onChange={this.handleChange}>
             {this.state.p}
            </p>
            <textarea value={this.state.value} onChange={this.handleChange} />
            
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }
  export default Form;