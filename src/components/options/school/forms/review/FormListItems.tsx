import React from "react";
import { SchoolFormItem } from "../../../../../api";
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";

interface FormListItemsProps {
  items: SchoolFormItem[];
}

const FormListItems: React.FC<FormListItemsProps> = ({ items }) => {
  return (
    <React.Fragment>
      {items.map((item, index) => {
        return (
          <ListItem key={index}>
            <ListItemButton>
              <ListItemIcon>
                {item.approved ? <DoneIcon /> : <QuestionMarkIcon />}
              </ListItemIcon>
              <ListItemText>{item.schoolName}</ListItemText>
            </ListItemButton>
          </ListItem>
        );
      })}
    </React.Fragment>
  );
};

export default FormListItems;
