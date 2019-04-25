import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';


class FormVent extends Component {
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
     this.setState({h1: event.target.value})
    }
  
    render() {
     
      return (
        <React.Fragment>
        <form onClick={this.handleClick} >
          <label><h1 className="letGO" onChange={this.handleChange} onClick={this.state.value} >
             {this.state.h1}
            </h1>
            
            <textarea value={this.state.value} onChange={this.handleChange} />
            
          </label>
          <div>
          <Button type="button" variant="primary" value="Let that shit go" onClick={this.state.value}>let it go</Button>
          </div>
        </form>
        </React.Fragment>
      );
    }
  }
  export default FormVent;