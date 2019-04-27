import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import '../Journal/journal.css';


class FormVent extends Component {
    constructor() {
      super();
      this.state = {
        h1: '',
        message: ''
      };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleClick = this.handleClick.bind(this)
      
    }
  
    handleChange(event) {
      this.setState({h1: event.target.value, message: ''});
    }
  
    handleClick(event) {
     this.setState({h1: '', message: 'Let that sh*t go'})
    }
  
    render() {
     
      return (
        <React.Fragment>
        <form >
          <label><h1 className="letGO" onChange={this.handleChange} onClick={this.state.value} >
             {this.state.message.length > 0 ? this.state.message: this.state.h1}
            </h1>
            
            <textarea className="textBox" value={this.state.h1} onChange={this.handleChange} />
            
          </label>
          <div>
          <Button onClick={this.handleClick} type="button" variant="primary" value="Let that sh*t go" >let it go</Button>
          </div>
        </form>
        </React.Fragment>
      );
    }
  }
  export default FormVent;