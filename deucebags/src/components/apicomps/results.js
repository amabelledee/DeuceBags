import React, { Component } from 'react';




class Form extends Component {
    constructor() {
      super();
      this.state = {
        h1: '',
        
      };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleClick = this.handleClick.bind(this)
      
    }
  
    handleChange(event) {
      this.setState({h1: event.target.value});
    }
  
    handleClick(event) {
     this.setState({h1: this.state.value})
     
    
    }
  
    render() {
     
      return (
        <form>
          <label><h1 onChange={this.handleChange} onClick={this.state.value} >
             {this.state.h1}
            </h1>
            
            <textarea id="textarea" value={this.state.value} onChange={this.handleChange} />
            
          </label>
          <button type="button" value="Let that shit go" onClick={this.state.value}>let it go</button>
        </form>
      );
    }
  }
  export default Form;