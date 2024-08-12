import React, { Component } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log('Login attempted with:', this.state);
    // Here you would typically send a request to your server
  };

  render() {
    return (
      <Container>
        <Row className="justify-content-md-center mt-5">
          <Col xs={12} md={6}>
            <h2 className="text-center mb-4">Login</h2>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={this.state.password}
                  onChange={this.handleChange}
                />
              </Form.Group>

              <Button href='http://localhost:3001/dashboard' variant="primary" type="submit" className="w-100">
                Login
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default LoginPage;
