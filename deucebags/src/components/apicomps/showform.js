import React, { Component } from 'react';
import Journal from './journal'



class Showform extends Component { 
    constructor() {
super()
    
    this.state = { showResults: false }

    this.handleClick = this.handleClick.bind(this) 
  };


    
    handleClick() {
            this.setState({ showResults: true })          
    }    

    handleClick2() {
      
            this.setState({ showResults: false})
        
    }

    render() {
            return (
                <div>
                    <button value="Search" onClick={this.handleClick}>Journal</button>
                    { this.state.showResults ? <Journal /> : null }
                </div>
            );
        }
    }

    // var Results = React.createClass({
    //     render: function() {
    //         return (
    //             <div id="results" className="search-results">
    //                 <Journal />
    //             </div>
    //         );
    //     }
    // });
    
  export default Showform;