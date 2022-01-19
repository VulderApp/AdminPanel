import React from "react";
import { Card, CardContent, Container } from "@mui/material";
import { SchoolFormItem } from "../../../../../api";
import EditorForm from "./EditorForm";

interface EditorCardProps {
  item: SchoolFormItem;
}

const EditorCard: React.FC<EditorCardProps> = ({ item }) => {
  return (
    <Container
      sx={{
        display: "flex",
        height: "100%",
        width: "auto",
        minHeight: "40vh",
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
      }}
    >
      <Card>
        <CardContent>
          <EditorForm form={item} />
        </CardContent>
      </Card>
    </Container>
  );
};

export default EditorCard;
