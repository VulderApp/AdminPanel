import React from "react";
import { useFormik } from "formik";
import { Button, Container, SxProps, TextField, Theme } from "@mui/material";
import * as yup from "yup";
import { changeUserPassword } from "../../../../api";
import { NavigateFunction } from "react-router-dom";
import { useRecoilState } from "recoil";
import { jwtToken } from "../../../../states";

interface ChangePasswordFormProps {
  navigate: NavigateFunction;
}

const ChangePasswordForm: React.FC<ChangePasswordFormProps> = ({
  navigate,
}) => {
  const [token, setToken] = useRecoilState(jwtToken);
  const inputStyles: SxProps<Theme> = {
    marginTop: "1rem",
  };

  const formik = useFormik({
    initialValues: {
      currentPassword: "",
      newPassword: "",
      repeatNewPassword: "",
    },
    validationSchema: yup.object({
      currentPassword: yup.string(),
      newPassword: yup.string().min(32, "Password is too short"),
      repeatNewPassword: yup.string().min(32, "Password is too short"),
    }),
    onSubmit: async (value) => {
      const response = await changeUserPassword(
        token!,
        value.currentPassword,
        value.newPassword
      );

      if (response.status !== 200) return;
      if (!response.data.result) return;

      setToken(null);
      navigate("/");
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
        id="currentPassword"
        label="Current password"
        variant="outlined"
        sx={inputStyles}
        type="password"
        error={
          formik.touched.currentPassword &&
          formik.errors.currentPassword !== undefined
        }
        helperText={formik.errors.currentPassword}
        onChange={formik.handleChange}
        value={formik.values.currentPassword}
      />
      <TextField
        id="newPassword"
        label="New password"
        variant="outlined"
        sx={inputStyles}
        type="password"
        error={
          formik.touched.newPassword && formik.errors.newPassword !== undefined
        }
        helperText={formik.errors.newPassword}
        onChange={formik.handleChange}
        value={formik.values.newPassword}
      />
      <TextField
        id="repeatNewPassword"
        label="Repeat new password"
        variant="outlined"
        sx={inputStyles}
        type="password"
        error={
          formik.touched.repeatNewPassword &&
          formik.errors.repeatNewPassword !== undefined
        }
        helperText={formik.errors.repeatNewPassword}
        onChange={formik.handleChange}
        value={formik.values.repeatNewPassword}
      />
      <Button type="submit" variant="contained" sx={{ marginTop: "2rem" }}>
        Approve school request
      </Button>
    </Container>
  );
};

export default ChangePasswordForm;
