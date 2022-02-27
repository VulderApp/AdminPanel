import React from "react";
import {
  Divider,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";
import { SchoolFormItem } from "../../../../../api/models/forms/schoolFormItem";

interface FormListItemsProps {
  items: SchoolFormItem[];
}

const FormListItems: React.FC<FormListItemsProps> = ({ items }) => {
  const navigate = useNavigate();

  return (
    <React.Fragment>
      {items.map((item, index) => {
        return (
          <>
            <ListItem key={index}>
              <ListItemButton
                onClick={() =>
                  navigate(`/options/school/forms/editor/${item.id}`)
                }
              >
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
