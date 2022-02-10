import React from "react";
import { Card, CardContent, Container } from "@mui/material";
import ChangePasswordForm from "./ChangePasswordForm";
import { NavigateFunction } from "react-router-dom";

interface ChangePasswordCardProps {
  navigate: NavigateFunction;
}

const ChangePasswordCard: React.FC<ChangePasswordCardProps> = ({
  navigate,
}) => {
  return (
    <Container
      sx={{
        display: "flex",
        height: "100%",
        width: "auto",
        minHeight: "80vh",
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
      }}
    >
      <Card>
        <CardContent>
          <ChangePasswordForm navigate={navigate} />
        </CardContent>
      </Card>
    </Container>
  );
};

export default ChangePasswordCard;
