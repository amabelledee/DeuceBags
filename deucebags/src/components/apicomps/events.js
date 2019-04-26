import React, { Component } from 'react';


const postalCode = '92677';

class Events extends Component {
  constructor(props) {
    super(props);

    this.state = {
      events: [],
    };
  }

  componentDidMount() {
    fetch('https://api.seatgeek.com/2/events?client_id=MTYzMDc4OTZ8MTU1NTc3OTkzMC4xNA&postal_code='+postalCode)
        .then(response => response.json())
        .then(data => this.setState({ events: data.events }));
  }




  render() {
    const { events } = this.state;
    console.log(events);
    return (
        <ul>
          {events.map(event =>
              <li key={event.id}>
                <a href={event.url}><h1>{event.title}</h1></a>
                <a>{event.venue.name} {event.venue.datetime_local}</a>

              </li>

          )}
        </ul>
    );

  }
}







export default Events
