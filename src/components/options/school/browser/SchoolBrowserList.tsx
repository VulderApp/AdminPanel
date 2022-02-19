import React from "react";
import { SchoolItem } from "../../../../api/models/schools/schoolItem";
import { NavigateFunction } from "react-router-dom";
import { List, ListItem, ListItemButton, ListItemText } from "@mui/material";

interface SchoolBrowserListProps {
  schools: SchoolItem[];
  navigate: NavigateFunction;
}

const SchoolBrowserList: React.FC<SchoolBrowserListProps> = ({
  schools,
  navigate,
}) => {
  return (
    <List>
      {schools.map((item) => {
        return (
          <ListItem key={item.id}>
            <ListItemButton
              onClick={() => navigate(`/options/school/editor/${item.id}`)}
            >
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
};

export default SchoolBrowserList;
