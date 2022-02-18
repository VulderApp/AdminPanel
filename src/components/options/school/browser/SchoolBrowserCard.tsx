import React from "react";
import { Card, CardContent, Container } from "@mui/material";
import SchoolBrowserList from "./SchoolBrowserList";
import { NavigateFunction } from "react-router-dom";

interface SchoolBrowserCardProps {
  navigate: NavigateFunction;
}

const SchoolBrowserCard: React.FC<SchoolBrowserCardProps> = ({ navigate }) => {
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
          <SchoolBrowserList navigate={navigate} />
        </CardContent>
      </Card>
    </Container>
  );
};

export default SchoolBrowserCard;
