import React from 'react';
import './buttons.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import btnImg from '../../images/Button.png';
import btnJoke from '../../images/JOKE.jpg';
import btnInspire from '../../images/INSPIRE.jpg';
import btnEvents from '../../images/EVENTS.jpg';
import btnKudos from '../../images/KUDOS.jpg';
import btnQuiet from '../../images/QUIET.jpg';
import btnVent from '../../images/VENT.jpg';
import Image from 'react-bootstrap/Image';

class Buttons extends React.Component {
  // render buttons and display text
  render() {
    return (
      <React.Fragment>
        <br></br>
        <br></br>
        <Container>
          <Row>
            <Col>
              <Image src={btnJoke} onClick={this.props.jokeClick} roundedCircle alt="Joke" />
              <br></br>
              <br></br>
              <Image src={btnInspire} onClick={this.props.quoteClick} roundedCircle alt="Inspire" />
              <br></br>
              <br></br>
              <Image src={btnEvents} onClick={this.props.clickEvents} roundedCircle alt="Events" />
            </Col>

            <Col>
              <Image src={btnKudos} onClick={this.props.complimentClick} roundedCircle alt="Kudos" />
            <br></br>
              <br></br>
              <a href="https://amabelledee.github.io/quietplace/"><Image src={btnQuiet} roundedCircle alt="Quiet" /></a>
              <br></br>
              <br></br>
              <Image src={btnVent} onClick={this.props.ventClick} roundedCircle alt="Vent" />
            </Col>
          </Row>
        </Container>
        {/* <div> */}
          {/* <button id="jokebutton" onClick={this.props.jokeClick}>Joke</button> */}
          {/* <button id="compliment" onClick={this.props.complimentClick}>Compliment</button>
          <button id="quote" onClick={this.props.quoteClick}>Quotes</button>
        </div> */}
      </React.Fragment>
    )
  };
}
export default Buttons;