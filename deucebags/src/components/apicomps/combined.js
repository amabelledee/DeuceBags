import React, { Component } from 'react';
import unirest from 'unirest'
import axios from 'axios'
import publicIP from 'react-native-public-ip'



class Buttons extends Component {
  constructor() {
      super()
      this.state = {
        h1: '',
        h2: ''
      }
      this.handleClick = this.handleClick.bind(this)
      this.handleClick2 = this.handleClick2.bind(this)
      this.handleClick3 = this.handleClick3.bind(this)
      this.handleClick4 = this.handleClick4.bind(this)
  }

// handleClick() {
// axios.get('https://icanhazdadjoke.com/accept')
// .then(response => this.setState(console.log(response.data) //{h1: response.data}))
// ))}

handleClick() {
unirest.get("https://icanhazdadjoke.com")
.header("accept", "application/json")

.then(result => this.setState({h1: result.body.joke, h2: ''}))


}
handleClick2() {
  axios.get('https://complimentr.com/api')
  .then(response2 => this.setState({h1: response2.data.compliment, h2: ''}))
  }

  handleClick3() {
    axios.get('http://quotes.rest/qod.json')
    .then(response => this.setState({h1: response.data.contents.quotes[0].quote, h2: response.data.contents.quotes[0].author}))
    }

    handleClick4() {
      publicIP()
  .then(ip => {
    console.log(ip);
    axios.get('http://api.ipstack.com/' + ip + '?access_key=3b5db9b8af6b7c378b215577728be0ae')
    .then(response => this.setState({h1: response.data.city, h2: ''}))
    
  })
  .catch(error => {
    console.log(error);
    
  });
}
    


render () {
  return(
  <div>
      <div  className='container'>
      <h1> {this.state.h1} </h1>
      <h2> {this.state.h2} </h2>
  </div>
  <button  id="jokebutton" onClick={this.handleClick}>yes</button>
  <button  id="compliment" onClick={this.handleClick2}>yes2</button>
  <button id="quote" onClick={this.handleClick3}>yes3</button>
  <button id="Geo" onClick={this.handleClick4}>yes4</button>
  </div>)
  
};

}
export default Buttons;
