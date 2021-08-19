import React, { ReactElement } from "react";
import { Col, Row } from "react-bootstrap";
import RegisterForm from "../components/register/RegisterForm";

export default function Register(): ReactElement {
  return (
    <Row>
      <Col>
        <div className="d-flex justify-content-center">
          <RegisterForm />
        </div>
      </Col>
    </Row>
  );
}
