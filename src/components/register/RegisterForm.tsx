import React, { ReactElement, useState } from "react";
import { Button, Card, FloatingLabel, Form, FormGroup } from "react-bootstrap";
import notificationUtil from "../../utils/notificationUtil";
import api from "../../api/api";
import tokenStorageUtil from "../../utils/tokenStorageUtil";
import { useRecoilState } from "recoil";
import { isLoggedIn, routeHistory } from "../../states";
import validationUtil from "../../utils/validationUtil";

export default function RegisterForm(): ReactElement {
  const [history] = useRecoilState(routeHistory);
  const [, setLoggedIn] = useRecoilState(isLoggedIn);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [privacyPolicy, setPrivacyPolicy] = useState(false);

  const validateRegister = (): boolean => {
    if (!privacyPolicy) {
      notificationUtil.showErrorAlert("Privacy policy not accepted");
      return false;
    }
    if (password != repeatPassword) {
      notificationUtil.showErrorAlert(
        "Password doesn't equal with repeated password"
      );
      return false;
    }
    if (
      validationUtil.isEmpty(email) ||
      validationUtil.isEmpty(password) ||
      validationUtil.isEmpty(repeatPassword)
    ) {
      notificationUtil.showErrorAlert("Register form is empty");
      return false;
    }
    return true;
  };

  const register = async () => {
    const response = await api.register(email, password);
    if (response.status !== 200) {
      notificationUtil.showErrorAlert("Internal server error");
      return;
    }
    tokenStorageUtil.setToken(response.data);
    setLoggedIn(true);
    history.push("/");
  };

  return (
    <Card className="text-center">
      <Card.Body>
        <Card.Title>Register your account</Card.Title>
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
            <FloatingLabel
              controlId="repeatPasswordFloatingInput"
              label="Repeat password"
              className="mb-3"
            >
              <Form.Control
                type="password"
                placeholder="repeatPassword"
                onChange={(e) => setRepeatPassword(e.target.value)}
              />
            </FloatingLabel>
            <Form.Check
              type="checkbox"
              label="You agree Privacy Policy & ToS"
              onChange={(e) => setPrivacyPolicy(e.target.checked)}
            />
            <br />
            <Button
              onClick={async () => {
                const isValid = validateRegister();
                if (isValid) await register();
              }}
            >
              Register
            </Button>
          </FormGroup>
        </Form>
      </Card.Body>
    </Card>
  );
}
