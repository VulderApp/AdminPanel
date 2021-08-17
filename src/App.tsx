import React, { ReactElement } from "react";
import { Router, Switch, Route } from "react-router-dom";
import Login from "./views/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import Appbar from "./components/app/Appbar";
import ReactNotification from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import { useRecoilState } from "recoil";
import {isLoggedIn, routeHistory} from "./states";
import tokenStorageUtil from "./utils/tokenStorageUtil";
import Register from "./views/Register";

export default function App(): ReactElement {
  const [,setLoggedIn] = useRecoilState(isLoggedIn)
  const [history] = useRecoilState(routeHistory);

  const handleTokenExisting = () => {
    if (tokenStorageUtil.isNotExists()) {
      history.push("/login")
      return;
    }
    history.push("/")
    setLoggedIn(true)
  }

  handleTokenExisting()

  return (
    <Router history={history}>
      <div className="App">
        <ReactNotification />
        <Appbar />
        <Container>
          <div className="content">
            <Switch>
              <Route exact path="/login">
                <Login />
              </Route>
              <Route exact path="/register">
                <Register/>
              </Route>
            </Switch>
          </div>
        </Container>
      </div>
    </Router>
  );
}
