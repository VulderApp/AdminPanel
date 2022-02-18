import React from "react";
import { Button, Container, SxProps, TextField, Theme } from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import { useRecoilValue } from "recoil";
import { jwtToken } from "../../../../states";
import { updateSchool } from "../../../../api";
import { NavigateFunction } from "react-router-dom";
import { School } from "../../../../api/models/school/school";

interface SchoolEditorFormProps {
  school: School;
  navigate: NavigateFunction;
}

const SchoolEditorForm: React.FC<SchoolEditorFormProps> = ({
  school,
  navigate,
}) => {
  const token = useRecoilValue(jwtToken);

  const inputStyles: SxProps<Theme> = {
    marginTop: "1rem",
  };

  const formik = useFormik({
    initialValues: {
      schoolName: school.name,
      timetableUrl: school.timetableUrl,
      schoolUrl: school.schoolUrl,
    },
    validationSchema: yup.object({
      schoolName: yup.string().min(10, "Too short!").required("Required"),
    }),
    onSubmit: async (values) => {
      const response = await updateSchool(
        token!,
        school.id,
        values.schoolName,
        values.schoolUrl,
        values.timetableUrl
      );

      if (!response.data.result) return;

      navigate("/options/school/browser");
    },
  });

  return (
    <Container
      component="form"
      autoComplete="off"
      onSubmit={formik.handleSubmit}
      sx={{
        display: "flex",
        flexDirection: "column",
        padding: "2rem",
      }}
    >
      <TextField
        id="schoolName"
        label="School Name"
        variant="outlined"
        sx={inputStyles}
        error={
          formik.touched.schoolName && formik.errors.schoolName !== undefined
        }
        helperText={formik.errors.schoolName}
        onChange={formik.handleChange}
        value={formik.values.schoolName}
      />
      <TextField
        id="schoolUrl"
        label="School Url"
        variant="outlined"
        sx={inputStyles}
        error={
          formik.touched.schoolUrl && formik.errors.schoolUrl !== undefined
        }
        helperText={formik.errors.schoolUrl}
        onChange={formik.handleChange}
        value={formik.values.schoolUrl}
      />
      <TextField
        id="timetableUrl"
        label="Timetable Url"
        variant="outlined"
        sx={inputStyles}
        error={
          formik.touched.schoolUrl && formik.errors.schoolUrl !== undefined
        }
        helperText={formik.errors.timetableUrl}
        onChange={formik.handleChange}
        value={formik.values.timetableUrl}
      />
      <Button type="submit" variant="contained" sx={{ marginTop: "2rem" }}>
        Update school
      </Button>
    </Container>
  );
};

export default SchoolEditorForm;
