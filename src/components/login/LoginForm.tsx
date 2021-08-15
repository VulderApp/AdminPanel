import React, {ReactElement, useState} from 'react';
import { store } from 'react-notifications-component';
import {Button, Card, FloatingLabel, Form, FormGroup} from "react-bootstrap";
import api from "../../api/api";
import tokenStorage from "../../utils/tokenStorageUtil";

const showErrorAlert = (message: string) => {
  store.addNotification({
    title: "Error",
    message: message,
    type: "danger",
    insert: "bottom",
    container: "bottom-right",
    animationIn: ["animate__animated", "animate__fadeIn"],
    animationOut: ["animate__animated", "animate__fadeOut"],
    dismiss: {
      duration: 5000,
      onScreen: true
    }
  });
}

const login = async (email: string, password: string): Promise<void> => {
  const token = await api.login(email, password)
  switch (token.status) {
    case 200:
      tokenStorage.setToken(token.data)
      break;
    case 500:
      showErrorAlert("Internal server error")
      break;
  }
}

export default function LoginForm(): ReactElement {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

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