import React, { Component } from 'react';


const postalCode = '92602';

class Events extends Component {
  constructor(props) {
    super(props);

    this.state = {
      events: [],
      isHidden:true,
    };

    this.componentDidMount = this.componentDidMount.bind(this);
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
                <a href={event.url}><h2>{event.title}</h2></a>
                <h4>{event.venue.name} {event.venue.datetime_local}</h4>

              </li>

          )}
        </ul>
    );

  }
}







export default Events
