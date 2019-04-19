import React, { Component } from 'react';




class Form extends Component {
    constructor() {
      super();
      this.state = {
        p: '',
        
      };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleClick = this.handleClick.bind(this)
      
    }
  
    handleChange(event) {
      this.setState({p: event.target.value});
    }
  
    handleClick(event) {
     this.setState({p: event.target.value})
     
    
    }
  
    render() {
     
      return (
        <form onClick={this.handleClick} >
          <label><p onChange={this.handleChange} onClick={this.state.value} >
             {this.state.p}
            </p>
            
            <textarea value={this.state.value} onChange={this.handleChange} />
            
          </label>
          <button type="button" value="Let that shit go" onClick={this.state.value}>let it go</button>
        </form>
      );
    }
  }
  export default Form;