import React, { Component } from 'react';
import axios from 'axios'
import publicIP from 'react-native-public-ip';

class Events extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        events: [],
      };

      this.handleClick = this.handleClick.bind(this)
    }
  
    handleClick() {
        publicIP()
  .then(ip => {
    console.log(ip);
    axios.get('http://api.ipstack.com/' + ip + '?access_key=3b5db9b8af6b7c378b215577728be0ae')
    .then(response => 
    

  
     fetch('https://api.seatgeek.com/2/events?client_id=MTYzMDc4OTZ8MTU1NTc3OTkzMC4xNA&postal_code='+ response.data.city)
          .then(response => response.json())
          .then(data => this.setState({ events: data.events }))

    )})
  
    }

  
    render() {
      const { events } = this.state;
      console.log(events);
      return (
          <div>
          <ul>
            {events.map(event =>
                <li key={event.id}>
                  <a href={event.url}><h1>{event.title}</h1></a>
                  <a>{event.venue.name} {event.venue.datetime_local}</a>
                  
                </li>
  
            )}
          </ul>
          <button className='button4' onClick={this.handleClick}>yes</button>
          </div>
      );
  
    }
  }
  
  
  
  
  
  
  
  export default Events