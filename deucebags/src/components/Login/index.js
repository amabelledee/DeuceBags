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
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <React.Fragment>
              <form id="sign-in-form" onSubmit={this.signIn}>
                <h2>Login</h2>
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
            <Button variant="primary" onClick={this.props.handleClose2}>
              Save Changes
              </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default Login;