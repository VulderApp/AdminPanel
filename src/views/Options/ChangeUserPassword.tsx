import React, { ReactElement } from "react";
import { useNavigate } from "react-router-dom";
import ChangePasswordCard from "../../components/options/user/password/ChangePasswordCard";

const ChangeUserPassword = (): ReactElement => {
  const navigate = useNavigate();

  return <ChangePasswordCard navigate={navigate} />;
};

export default ChangeUserPassword;
