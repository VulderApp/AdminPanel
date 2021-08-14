import React, {ReactElement, useState} from 'react';
import {Button, Card, FloatingLabel, Form, FormGroup} from "react-bootstrap";
import api from "../../api/api";

const login = async (email: string, password: string): Promise<void> => {
  await api.login(email, password)
}

export default function LoginForm(): ReactElement {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
        <Card className="text-center">
          <Card.Body>
            <Card.Title>Welcome to Vulder Admin</Card.Title>
            <Form>
              <FormGroup className="md-3">
                <FloatingLabel
                  controlId="emailFloatingInput"
                  label="Email"
                  className="mb-3"
                >
                  <Form.Control type="email" placeholder="name@example.com" onChange={e => setEmail(e.target.value)}/>
                </FloatingLabel>
                <FloatingLabel
                  controlId="passwordFloatingInput"
                  label="Password"
                  className="mb-3"
                >
                  <Form.Control type="password" placeholder="Password" onChange={e => setPassword(e.target.value)}/>
                </FloatingLabel>
                <Button onClick={async () => {
                  await login(email, password)
                }}>Login</Button>
              </FormGroup>
            </Form>
          </Card.Body>
        </Card>
  )
}