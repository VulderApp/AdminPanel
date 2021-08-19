import React, { ReactElement, useState } from "react";
import { Button, Card, FloatingLabel, Form, FormGroup } from "react-bootstrap";
import notificationUtil from "../../utils/notificationUtil";
import api from "../../api/api";

export default function RegisterForm(): ReactElement {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [privacyPolicy, setPrivacyPolicy] = useState(false);

  const register = async () => {
    if (!privacyPolicy)
      notificationUtil.showErrorAlert("Privacy policy not accepted");
    if (password != repeatPassword)
      notificationUtil.showErrorAlert(
        "Password doesn't equal with repeated password"
      );
    const response = await api.register(email, password);
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
            <Button onClick={async () => await register()}>Register</Button>
          </FormGroup>
        </Form>
      </Card.Body>
    </Card>
  );
}
