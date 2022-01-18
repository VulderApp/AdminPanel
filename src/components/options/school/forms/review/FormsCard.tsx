import React, { ReactElement, useEffect, useState } from "react";
import { Card, CardContent, Container, List } from "@mui/material";
import { GetSchoolForms, SchoolFormItem } from "../../../../../api";
import FormListItems from "./FormListItems";
import { useRecoilValue } from "recoil";
import { jwtToken } from "../../../../../states";

const FormsCard = (): ReactElement => {
  const [forms, setForms] = useState<Array<SchoolFormItem>>([]);
  const [page] = useState<number>(1);
  const token = useRecoilValue(jwtToken);

  const handleSchoolFormUpdate = async () => {
    const response = await GetSchoolForms(token!, page);

    if (response.status !== 200) return;

    setForms(forms.concat(response.data));
  };

  useEffect(() => {
    (async () => await handleSchoolFormUpdate())();
  }, [page]);

  return (
    <Container
      sx={{
        display: "flex",
        height: "100%",
        width: "auto",
        minHeight: "20vh",
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
      }}
    >
      <Card>
        <CardContent>
          <List>
            <FormListItems items={forms} />
          </List>
        </CardContent>
      </Card>
    </Container>
  );
};

export default FormsCard;
