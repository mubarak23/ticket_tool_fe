import React, { useState, useEffect } from "react";
import FormContainer from "../components/FormContainer";
import { Link } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import axios from "axios";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const HandleLogin = async (e) => {
    e.preventDefault();

    try {
      const user_login = await axios.post(
        "http://127.0.0.1:8000/api/auth/AuthLogin",
        { email, password }
      );
      console.log(user_login);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <FormContainer>
      <h2>SignIn</h2>
      <Form onSubmit={HandleLogin}>
        <Form.Group controlId="email">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Button type="submit" variant="primary">
          SignIn
        </Button>
      </Form>
      <Row className="py-3">
        <Col>
          New Customer? <Link to="/Home">Register</Link>
        </Col>
      </Row>
    </FormContainer>
  );
};

export default LoginScreen;
