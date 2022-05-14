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
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import { useNavigate } from "react-router-dom";
import { SchoolFormItem } from "../../../../../api/models/forms/schoolFormItem";
import { Status } from "../../../../../api/models/forms/schoolFormStatus";

interface FormListItemsProps {
  items: SchoolFormItem[];
}

const FormListItems: React.FC<FormListItemsProps> = ({ items }) => {
  const navigate = useNavigate();

  const renderStatus = (status: Status) => {
    switch (status) {
      case Status.None:
        return <QuestionMarkIcon sx={{ color: "gray" }} />;
      case Status.Approved:
        return <DoneIcon sx={{ color: "green" }} />;
      case Status.Refused:
        return <CloseIcon sx={{ color: "red" }} />;
    }
  };

  return (
    <React.Fragment>
      {items.map((item, index) => {
        return (
          <>
            <ListItem key={item.id}>
              <ListItemButton
                onClick={() =>
                  navigate(`/options/school/forms/editor/${item.id}`)
                }
              >
                <ListItemIcon>{renderStatus(item.status)}</ListItemIcon>
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
