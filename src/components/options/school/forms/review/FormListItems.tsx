import React from "react";
import { SchoolFormItem } from "../../../../../api";
import {
  Divider,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";

interface FormListItemsProps {
  items: SchoolFormItem[];
}

const FormListItems: React.FC<FormListItemsProps> = ({ items }) => {
  return (
    <React.Fragment>
      {items.map((item, index) => {
        return (
          <>
            <ListItem key={index}>
              <ListItemButton>
                <ListItemIcon>
                  {item.approved ? (
                    <DoneIcon sx={{ color: "green" }} />
                  ) : (
                    <CloseIcon sx={{ color: "red" }} />
                  )}
                </ListItemIcon>
                <ListItemText>{item.schoolName}</ListItemText>
              </ListItemButton>
            </ListItem>
            <Divider />
          </>
        );
      })}
    </React.Fragment>
  );
};

export default FormListItems;
