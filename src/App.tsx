import React, {ReactElement} from 'react';
import {
  Router,
  Switch,
  Route
} from "react-router-dom";
import { createBrowserHistory } from "history";
import Login from "./views/Login";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from "react-bootstrap";
import Appbar from "./components/app/Appbar";
import ReactNotification from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'

const history = createBrowserHistory();

export default function App(): ReactElement {
  return (
    <Router history={history}>
      <div className="App">
        <ReactNotification />
        <Appbar/>
        <Container>
          <div className="content">
            <Switch>
              <Route exact path='/login'>
                <Login/>
              </Route>
            </Switch>
          </div>
        </Container>
      </div>
    </Router>
  );
}
