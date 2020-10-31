import React from "react";
import Navbar from "../components/Navbar";
import { Container, Row, Col } from "react-bootstrap";

const HomeScreen = () => {
  return (
    <div>
      <Navbar />
      <Container>
        <Row>
          <Col md={2}></Col>
          <Col md={10}>
            <div>
              <h2>Welcome to Home screen </h2>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HomeScreen;
