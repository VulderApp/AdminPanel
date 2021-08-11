import React, {ReactElement} from 'react';
import {Col, Container, Nav, Navbar, Row} from 'react-bootstrap';

export default function Appbar(): ReactElement {
  return (
    <Row>
      <Col>
        <Navbar bg="primary" variant="dark">
          <Container>
            <Navbar.Brand href="#">Vulder - Admin Panel</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home">Back to vulder.xyz</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </Col>
    </Row>
  )
}