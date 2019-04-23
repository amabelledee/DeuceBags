import React from 'react';
import './buttons.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import btnImg from '../../images/Button.png';
import Image from 'react-bootstrap/Image';

class Buttons extends React.Component {
  // render buttons and display text
  render() {
    return (
      <React.Fragment>
        <Container>
                    <Row>
                        <Col xs={6} md={4}>
                            <Image src={btnImg} onClick={this.props.jokeClick} roundedCircle alt="button" />
                        </Col>
                        <Col xs={6} md={4}>
                            <Image src={btnImg} roundedCircle alt="button" />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={6} md={4}>
                            <Image src={btnImg} roundedCircle alt="button" />
                        </Col>
                        <Col xs={6} md={4}>
                            <Image src={btnImg} roundedCircle alt="button" />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={6} md={4}>
                            <Image src={btnImg} roundedCircle alt="button" />
                        </Col>
                        <Col xs={6} md={4}>
                            <Image src={btnImg} roundedCircle alt="button" />
                        </Col>
                    </Row>
                </Container>
        <div>
          {/* <button id="jokebutton" onClick={this.props.jokeClick}>Joke</button> */}
          <button id="compliment" onClick={this.props.complimentClick}>Compliment</button>
          <button id="quote" onClick={this.props.quoteClick}>Quotes</button>
        </div>
      </React.Fragment>
    )
  };
}
export default Buttons;