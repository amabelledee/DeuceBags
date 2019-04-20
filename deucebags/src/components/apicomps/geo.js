import React, { Component } from 'react';
import axios from 'axios'
import publicIP from 'react-native-public-ip';



class Geo extends Component {
  constructor() {
      super()
      this.state = {
        h1: ''
      }
      this.handleClick = this.handleClick.bind(this)
  }
  

handleClick() {     


publicIP()
  .then(ip => {
    console.log(ip);
    axios.get('http://api.ipstack.com/' + ip + '?access_key=3b5db9b8af6b7c378b215577728be0ae')
    .then(response => this.setState({h1: response.data.zip}))
    
    
  })
  .catch(error => {
    console.log(error);
    
  });
}






render () {
  return(
  <div>
      <div id="geo" className='container'>
      <h1> {this.state.h1}  </h1>
  </div>
  <button className='button4' onClick={this.handleClick}>yes</button>
  
  </div>)
  
};

}
export default Geo;

