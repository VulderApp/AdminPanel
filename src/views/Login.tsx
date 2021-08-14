import React, {ReactElement} from 'react';
import { Col, Row } from 'react-bootstrap';
import LoginForm from "../components/login/LoginForm";

export default function Login(): ReactElement {
  return (
    <Row>
      <Col>
        <div className="d-flex justify-content-center">
          <LoginForm/>
        </div>
      </Col>
    </Row>
  )
}