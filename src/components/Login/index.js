import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import 'react-bootstrap';

class Login extends React.Component {

  render() {
    return (
      <>
        <Modal show={this.props.show2} onHide={this.props.handleClose2}>
          <Modal.Header closeButton>
            <Modal.Title>Login</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <React.Fragment>
              <form id="sign-in-form" onSubmit={this.signIn}>
                <input value={this.props.value} onChange={this.props.loginChange} type="email" placeholder="Email" required></input>
                <input value={this.props.value} onChange={this.props.logpassChange} type="password" placeholder="Password" required></input>
                <button id="signIn-button" type="submit" onClick={this.props.signInButton}>Sign In</button>
              </form>
            </React.Fragment>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.props.handleClose2}>
              Close
              </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default Login;