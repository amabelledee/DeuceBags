import React, { Component } from 'react';
import Axios from 'axios';





class Form extends Component {
    constructor() {
      super();
      this.state = {
        h1: '',
        
      };
  
     
      this.handleClick = this.handleClick.bind(this)
      
    }
  
    
  
    handleClick() {
        Axios.post("/api/posts", function(req, res) {
            console.log(req.body);
            this.preventdefault()
            
            })
              .then(function(res) {
                res.json();
              });
          
     
    
    }
  
    render() {
     
      return (
        <form method="post" onClick={this.handleClick} >
          <input type="text"  name="name" />
          <textarea  name="body" />
    
            
        
            
          
          <button type="submit"  onClick={this.handleClick} value="Save">Submit</button>
        </form>
      );
    }
  }
  export default Form;