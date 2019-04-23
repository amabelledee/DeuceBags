import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import 'react-bootstrap';

class Example extends React.Component {
  
    render() {
      return (
        <>
          <Modal show={this.props.show} onHide={this.props.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>Woohoo, you're reading this text in a modal!
            {this.props.showRegistration === true &&
            <React.Fragment>
                <h2>Registration form</h2>
            </React.Fragment>
            }
             {this.props.showRegistration === false &&
            <React.Fragment>
                <h2>Sign In form</h2>
            </React.Fragment>
            }
            {this.props.showRegistration ? <p>Registration form</p> : <p>Sign In Form</p>}
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.props.handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={this.props.handleClose}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      );
    }
  }

export default Example;