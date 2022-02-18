import React from "react";
import { Card, CardContent, Container } from "@mui/material";
import SchoolBrowserList from "./SchoolBrowserList";

const SchoolBrowserCard = () => {
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
          <SchoolBrowserList />
        </CardContent>
      </Card>
    </Container>
  );
};

export default SchoolBrowserCard;
