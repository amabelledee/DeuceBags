import React, { Component } from 'react';
import Diary from './diary'



class Showdiary extends Component { 
    constructor() {
super()
    
    this.state = { showResults: false }

    this.handleClick = this.handleClick.bind(this) 
  };


    
    handleClick() {
            this.setState({ showResults: !this.state.showResults })          
    }    

    

    render() {
            return (
                <div>
                    <button value="Search" onClick={this.handleClick}>Diary</button>
                    { this.state.showResults ? <Diary /> : null }
                </div>
            );
        }
    }

   
    
  export default Showdiary;