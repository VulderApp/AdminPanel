import React, {ReactElement} from 'react';
import { Col, Row } from 'react-bootstrap';
import LoginForm from "../components/login/LoginForm";

export default function Login(): ReactElement {
  return (
    <Row>
      <Col md={{ span: 6, offset: 3 }}>
        <div className="d-flex justify-content-center">
          <LoginForm/>
        </div>
      </Col>
    </Row>
  )
}