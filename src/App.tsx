import React, { ReactElement } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material";
import Login from "./views/Login";
import Appbar from "./components/root/Appbar";
import { RecoilRoot } from "recoil";
import Home from "./views/Home";
import SchoolFormReview from "./views/Options/SchoolFormReview";

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
        <Appbar />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />}>
              <Route path="options">
                <Route path="school/forms" element={<SchoolFormReview />} />
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </RecoilRoot>
  );
};

export default App;
