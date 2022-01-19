import React, { ReactElement } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material";
import Login from "./views/Login";
import Appbar from "./components/root/Appbar";
import { RecoilRoot } from "recoil";
import Home from "./views/Home";
import SchoolFormReview from "./views/Options/SchoolFormReview";
import SchoolFormEditor from "./views/Options/SchoolFormEditor";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ffc107",
    },
    secondary: {
      main: "#ff9100",
    },
  },
});

const App = (): ReactElement => {
  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Appbar />
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
\            <Route path="/options/school/forms" element={<SchoolFormReview />} />
            <Route
              path="/options/school/forms/editor/{:id}"
              element={<SchoolFormEditor />}
            />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </RecoilRoot>
  );
};

export default App;
