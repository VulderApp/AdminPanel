import React, { ReactElement } from "react";
import {
  Card,
  CardContent,
  Container,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const OptionsCard = (): ReactElement => {
  const navigate = useNavigate();

  return (
    <Container
      sx={{
        display: "flex",
        height: "100%",
        width: "auto",
        minHeight: "90vh",
        justifyContent: "center",
        textAlign: "center",
        alignItems: "center",
        alignSelf: "center",
      }}
    >
      <Card>
        <CardContent>
          <List>
            <ListItemButton onClick={() => navigate("/options/school/forms")}>
              <ListItem>
                <ListItemText>Review School Requests</ListItemText>
              </ListItem>
            </ListItemButton>
            <Divider />
            <ListItemButton onClick={() => navigate("/options/school/browser")}>
              <ListItem>
                <ListItemText>Browse school collection</ListItemText>
              </ListItem>
            </ListItemButton>
            <Divider />
            <ListItemButton onClick={() => navigate("/user/password")}>
              <ListItem>
                <ListItemText>Change password</ListItemText>
              </ListItem>
            </ListItemButton>
          </List>
        </CardContent>
      </Card>
    </Container>
  );
};

export default OptionsCard;
