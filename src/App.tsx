import React, { ReactElement } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material";
import Login from "./views/Login";
import Appbar from "./components/root/Appbar";
import { RecoilRoot } from "recoil";
import Home from "./views/Home";
import SchoolFormReview from "./views/Options/SchoolFormReview";
import SchoolFormEditor from "./views/Options/SchoolFormEditor";
import ChangeUserPassword from "./views/Options/ChangeUserPassword";
import SchoolBrowser from "./views/Options/SchoolBrowser";
import SchoolEditor from "./views/Options/SchoolEditor";

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
            <Route path="/options">
              <Route path="school">
                <Route path="browser" element={<SchoolBrowser />} />
                <Route path="editor/:id" element={<SchoolEditor />} />
                <Route path="forms" element={<SchoolFormReview />}>
                  <Route index element={<SchoolFormReview />} />
                  <Route path="editor/:id" element={<SchoolFormEditor />} />
                </Route>
              </Route>
            </Route>
            <Route path="/user/password" element={<ChangeUserPassword />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </RecoilRoot>
  );
};

export default App;
