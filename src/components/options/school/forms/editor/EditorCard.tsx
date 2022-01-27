import React, { useEffect, useState } from "react";
import { Card, CardContent, Container, Typography } from "@mui/material";
import EditorForm from "./EditorForm";
import { getSchoolForm, SchoolFormItem } from "../../../../../api";
import { useRecoilValue } from "recoil";
import { jwtToken } from "../../../../../states";
import { NavigateFunction } from "react-router-dom";

interface EditorCardProps {
  id: string;
  navigate: NavigateFunction;
}

const EditorCard: React.FC<EditorCardProps> = ({ id, navigate }) => {
  const [form, setForm] = useState<SchoolFormItem | null>(null);
  const token = useRecoilValue(jwtToken);

  const handleFormUpdate = async () => {
    const response = await getSchoolForm(token!, id);

    if (response.status !== 200) return;

    setForm(response.data);
  };

  useEffect(() => {
    (async () => await handleFormUpdate())();
  }, [id]);

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
          <Typography sx={{ textAlign: "center" }} variant="h5" component="div">
            {form?.schoolName}
          </Typography>
          {form ? <EditorForm item={form} navigate={navigate} /> : null}
        </CardContent>
      </Card>
    </Container>
  );
};

export default EditorCard;
