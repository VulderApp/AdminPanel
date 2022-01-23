import React from "react";
import { Button, Container, SxProps, TextField, Theme } from "@mui/material";
import {
  addSchool,
  approveSchoolForm,
  refuseSchoolForm,
  SchoolFormItem,
} from "../../../../../api";
import { useFormik } from "formik";
import * as yup from "yup";
import { useRecoilValue } from "recoil";
import { jwtToken } from "../../../../../states";
import { NavigateFunction } from "react-router-dom";

interface EditorFormProps {
  item: SchoolFormItem;
  navigate: NavigateFunction;
}

const EditorForm: React.FC<EditorFormProps> = ({ item, navigate }) => {
  const token = useRecoilValue(jwtToken);

  const inputStyles: SxProps<Theme> = {
    marginTop: "1rem",
  };

  const handleRefuseButton = async () => {
    const response = await refuseSchoolForm(token!, item.id);

    if (response.status !== 200) return;

    navigate("/options/school/forms");
  };

  const formik = useFormik({
    initialValues: {
      schoolName: item.schoolName,
      schoolUrl: item.schoolUrl,
      timetableUrl: item.timetableUrl,
    },
    validationSchema: yup.object({
      schoolName: yup.string().min(10, "Too short!").required("Required"),
      schoolUrl: yup.string().url("Invalid URL").required("Required"),
      schoolTimetableUrl: yup.string().url("Invalid URL").required("Required"),
    }),
    onSubmit: async (values) => {
      const addSchoolResponse = await addSchool(
        token!,
        values.schoolName,
        values.schoolUrl,
        values.timetableUrl
      );

      if (addSchoolResponse.status !== 200) return;

      await approveSchoolForm(token!, item.id);
      navigate("/options/school/forms");
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
        id="requesterEmail"
        label="Requester Email"
        variant="outlined"
        sx={inputStyles}
        value={item.requesterEmail}
        disabled={true}
      />
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
        Approve school request
      </Button>
      <Button
        type="button"
        variant="contained"
        color="error"
        sx={inputStyles}
        onClick={async () => await handleRefuseButton()}
      >
        Refuse school request
      </Button>
    </Container>
  );
};

export default EditorForm;
