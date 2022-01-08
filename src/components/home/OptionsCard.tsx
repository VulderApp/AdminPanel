import React, { ReactElement } from "react";
import {
  Card,
  CardContent,
  Container,
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
        alignItems: "center",
        alignSelf: "center",
      }}
    >
      <Card>
        <CardContent>
          <List>
            <ListItemButton onClick={() => navigate("options/school/forms")}>
              <ListItem>
                <ListItemText>Review School Requests</ListItemText>
              </ListItem>
            </ListItemButton>
          </List>
        </CardContent>
      </Card>
    </Container>
  );
};

export default OptionsCard;
