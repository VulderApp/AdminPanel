import React, { ReactElement } from "react";
import { Button, Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import { useRecoilState } from "recoil";
import { isLoggedIn, routeHistory } from "../../states";
import tokenStorageUtil from "../../utils/tokenStorageUtil";

export default function Appbar(): ReactElement {
  const [history] = useRecoilState(routeHistory);
  const [loggedIn, setLoggedIn] = useRecoilState(isLoggedIn);

  const logout = (): void => {
    history.push("/login");
    tokenStorageUtil.removeToken();
    setLoggedIn(false);
  };

  function ShowLogoutButton(): JSX.Element {
    if (loggedIn) {
      return (
        <Navbar.Collapse className="logout justify-content-end">
          <Button onClick={() => logout()} variant="success">
            Log out
          </Button>
        </Navbar.Collapse>
      );
    }
    return <div />;
  }

  return (
    <Row>
      <Col>
        <Navbar bg="primary" variant="dark">
          <Container>
            <Navbar.Brand href="#">Vulder - Admin Panel</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home">Back to vulder.xyz</Nav.Link>
            </Nav>
            <ShowLogoutButton />
          </Container>
        </Navbar>
      </Col>
    </Row>
  );
}
