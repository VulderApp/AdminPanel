import { Card, CardContent, CircularProgress, Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import SchoolEditorForm from "./SchoolEditorForm";
import { NavigateFunction } from "react-router-dom";
import { getSchool } from "../../../../api";
import { School } from "../../../../api/models/school/school";

interface SchoolEditorCardProps {
  id: string;
  navigate: NavigateFunction;
}

const SchoolEditorCard: React.FC<SchoolEditorCardProps> = ({
  id,
  navigate,
}) => {
  const [school, setSchool] = useState<School | null>(null);

  const handleOnMount = async () => {
    const school = await getSchool(id);
    setSchool(school.data);
  };

  useEffect(() => {
    (async () => await handleOnMount())();
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
          {school ? (
            <SchoolEditorForm school={school} navigate={navigate} />
          ) : (
            <CircularProgress />
          )}
        </CardContent>
      </Card>
    </Container>
  );
};

export default SchoolEditorCard;
