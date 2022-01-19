import React from "react";
import { Container, TextField } from "@mui/material";
import {
  AddSchool,
  ApproveSchoolForm,
  SchoolFormItem,
} from "../../../../../api";
import { useFormik } from "formik";
import * as yup from "yup";
import { useRecoilValue } from "recoil";
import { jwtToken } from "../../../../../states";

interface EditorFormProps {
  form: SchoolFormItem;
}

const EditorForm: React.FC<EditorFormProps> = ({ form }) => {
  const token = useRecoilValue(jwtToken);

  const formik = useFormik({
    initialValues: {
      schoolName: form.schoolName,
      schoolUrl: form.schoolUrl,
      timetableUrl: form.timetableUrl,
    },
    validationSchema: yup.object({
      schoolName: yup.string().min(10, "Too short!").required("Required"),
      schoolUrl: yup.string().url("Invalid URL").required("Required"),
      schoolTimetableUrl: yup.string().url("Invalid URL").required("Required"),
    }),
    onSubmit: async (values) => {
      const addSchoolResponse = await AddSchool(
        token!,
        values.schoolName,
        values.schoolUrl,
        values.timetableUrl
      );

      if (addSchoolResponse.status !== 200) return;

      await ApproveSchoolForm(token!, form.id);
    },
  });

  return (
    <Container
      component="form"
      onSubmit={formik.handleSubmit}
      autoComplete="off"
    >
      <TextField
        id="outlined-basic"
        label="School Name"
        variant="outlined"
        error={
          formik.touched.schoolName && formik.errors.schoolName !== undefined
        }
        helperText={formik.errors.schoolName}
        onChange={formik.handleChange}
        value={formik.values.schoolName}
      />
      <TextField
        id="outlined-basic"
        label="School Url"
        variant="outlined"
        error={
          formik.touched.schoolUrl && formik.errors.schoolUrl !== undefined
        }
        helperText={formik.errors.schoolUrl}
        onChange={formik.handleChange}
        value={formik.values.schoolUrl}
      />
      <TextField
        id="outlined-basic"
        label="Timetable Url"
        variant="outlined"
        error={
          formik.touched.schoolUrl && formik.errors.schoolUrl !== undefined
        }
        helperText={formik.errors.timetableUrl}
        onChange={formik.handleChange}
        value={formik.values.timetableUrl}
      />
    </Container>
  );
};

export default EditorForm;
