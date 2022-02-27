import React, { useEffect, useState } from "react";
import { CircularProgress, Container, List, Pagination } from "@mui/material";
import FormListItems from "./FormListItems";
import { SchoolForms } from "../../../../../api/models/forms/schoolForms";
import { useRecoilValue } from "recoil";
import { jwtToken } from "../../../../../states";
import { getSchoolForms } from "../../../../../api";

const FormsContent = () => {
  const [page, setPage] = useState(1);
  const [forms, setForms] = useState<SchoolForms | null>(null);
  const token = useRecoilValue(jwtToken);

  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) =>
    setPage(value);

  const handleSchoolFormUpdate = async () => {
    const response = await getSchoolForms(token!, page);

    if (response.status !== 200) return;

    setForms(response.data);
  };

  useEffect(() => {
    (async () => await handleSchoolFormUpdate())();
  }, [page]);

  return (
    <Container>
      {forms ? (
        <List>
          <FormListItems items={forms?.forms} />
        </List>
      ) : (
        <CircularProgress />
      )}
      <Container
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Pagination count={forms?.pages} onChange={handlePageChange} />
      </Container>
    </Container>
  );
};

export default FormsContent;
