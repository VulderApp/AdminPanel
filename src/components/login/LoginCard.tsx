import React, { ReactElement } from "react";
import { Card, CardContent, Container } from "@mui/material";
import LoginForm from "./LoginForm";

const LoginCard = (): ReactElement => {
  return (
    <Container
      sx={{
        display: "flex",
        height: "100%",
        width: "auto",
        minHeight: "90vh",
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
      }}
    >
      <Card>
        <CardContent>
          <LoginForm />
        </CardContent>
      </Card>
    </Container>
  );
};

export default LoginCard;
