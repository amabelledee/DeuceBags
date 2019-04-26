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
            <Modal.Title>Create User</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <React.Fragment>
              <form id="create-user-form" onSubmit={this.createUser}>
                <input value={this.props.value} onChange={this.props.emailChange} type="email" placeholder="Email" required></input>
                <input value={this.props.value} onChange={this.props.passwordChange} type="password" placeholder="Password" required></input>
                <button id="sign-up-button" type="submit" onClick={this.props.createAccount}>Sign Up</button>
              </form>
            </React.Fragment>
            {/* {this.props.showRegistration === true &&
          
            }
             {this.props.showRegistration === false &&
            <React.Fragment>
                <h2>Sign In form</h2>
            </React.Fragment>
            } */}
            {/* {this.props.showRegistration ? <p>Registration form</p> : <p>Sign In Form</p>} */}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.props.handleClose}>
              Close
              </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default Example;