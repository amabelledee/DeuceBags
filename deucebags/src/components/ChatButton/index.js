import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import './chatButton.css'


class ChatButton extends React.Component {

    render() {
        return (
            <React.Fragment>
                <Container>
                <Row>
                <Col xs={6} md={3}>
                  <Button as="input" type="submit" value="CHAT" className="deepBlue justify-content-md-center" block />
                </Col>
              </Row>
              </Container>
            </React.Fragment>
        );
    }
}

export default ChatButton;