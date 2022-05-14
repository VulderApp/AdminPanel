import { Button, Container, SxProps, TextField, Theme } from "@mui/material";
import React from "react";
import { loginUser } from "../../api/api";
import { useSetRecoilState } from "recoil";
import { jwtToken } from "../../states";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";

interface Values {
  email: string;
  password: string;
}

const LoginForm = () => {
  const setToken = useSetRecoilState(jwtToken);
  const navigate = useNavigate();

  const inputStyles: SxProps<Theme> = {
    marginTop: "0.5rem",
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: yup.object({
      email: yup.string().email("Invalid email address").required("Required"),
      password: yup
        .string()
        .min(8, "Password is too short")
        .required("Required"),
    }),
    onSubmit: async (values: Values) => {
      const response = await loginUser(values.email, values.password);
      if (response.status !== 200) return;

      setToken(response.data.token);
      navigate("/home");
    },
  });

  return (
    <Container
      component="form"
      onSubmit={formik.handleSubmit}
      autoComplete="off"
      sx={{
        display: "flex",
        flexDirection: "column",
        padding: "2rem",
      }}
    >
      <TextField
        id="email"
        sx={inputStyles}
        label="Email"
        variant="outlined"
        type="email"
        error={formik.touched.email && formik.errors.email !== undefined}
        helperText={formik.errors.email}
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      <TextField
        id="password"
        sx={inputStyles}
        label="Password"
        variant="outlined"
        type="password"
        error={formik.touched.password && formik.errors.password !== undefined}
        helperText={formik.errors.password}
        onChange={formik.handleChange}
        value={formik.values.password}
      />
      <Button sx={{ marginTop: "2rem" }} variant="outlined" type="submit">
        Login
      </Button>
    </Container>
  );
};

export default LoginForm;
