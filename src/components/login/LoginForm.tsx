import React, {ReactElement, useState} from 'react';
import {Button, Card, Col, FloatingLabel, Form, FormGroup, Row} from "react-bootstrap";

export default function LoginForm(): ReactElement {
  return (
        <Card className="text-center" >
          <Card.Body>
            <Card.Title>Welcome to Vulder Admin</Card.Title>
            <Form>
              <FormGroup className="md-3">
                <FloatingLabel
                  controlId="emailFloatingInput"
                  label="Email"
                  className="mb-3"

                >
                  <Form.Control type="email" placeholder="name@example.com"/>
                </FloatingLabel>
                <FloatingLabel
                  controlId="passwordFloatingInput"
                  label="Password"
                  className="mb-3"
                >
                  <Form.Control type="password" placeholder="Password"/>
                </FloatingLabel>
                <Button type="submit">Login</Button>
              </FormGroup>
            </Form>
          </Card.Body>
        </Card>
  )
}