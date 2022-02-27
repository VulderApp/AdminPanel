import React, { ReactElement } from "react";
import { Card, CardContent, Container } from "@mui/material";
import FormsContent from "./FormsContent";

const FormsCard = (): ReactElement => {
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
          <FormsContent />
        </CardContent>
      </Card>
    </Container>
  );
};

export default FormsCard;
