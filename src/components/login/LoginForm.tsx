import React, { ReactElement, useState } from "react";
import { store } from "react-notifications-component";
import { Button, Card, FloatingLabel, Form, FormGroup } from "react-bootstrap";
import api from "../../api/api";
import tokenStorage from "../../utils/tokenStorageUtil";
import { useRecoilState } from "recoil";
import { isLoggedIn, routeHistory } from "../../states";
import validationUtil from "../../utils/validationUtil";

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
      onScreen: true,
    },
  });
};

export default function LoginForm(): ReactElement {
  const [, setLoggedIn] = useRecoilState(isLoggedIn);
  const [history] = useRecoilState(routeHistory);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const validateBeforeLogin = () => {
    if (validationUtil.isEmpty(email) || validationUtil.isEmpty(password))
    {
      showErrorAlert("Please fill all fields")
      return false
    }


    return true
  }

  const login = async (): Promise<void> => {
    const token = await api.login(email, password);
    switch (token.status) {
      case 200:
        tokenStorage.setToken(token.data);
        setLoggedIn(true);
        history.push("/");
        break;
      case 400:
        showErrorAlert("Email or password are invalid");
        break;
      case 500:
        showErrorAlert("Internal server error");
        break;
    }
  };

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
              <Form.Control
                type="email"
                placeholder="name@example.com"
                onChange={(e) => setEmail(e.target.value)}
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="passwordFloatingInput"
              label="Password"
              className="mb-3"
            >
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </FloatingLabel>
            <Button
              onClick={async () => {
                validateBeforeLogin()
                await login()
              }}
            >
              Login
            </Button>
          </FormGroup>
        </Form>
      </Card.Body>
    </Card>
  );
}
