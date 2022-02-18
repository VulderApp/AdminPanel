import React, { ReactElement } from "react";
import SchoolBrowserCard from "../../components/options/school/browser/SchoolBrowserCard";
import { useNavigate } from "react-router-dom";

const SchoolBrowser = (): ReactElement => {
  const navigate = useNavigate();

  return <SchoolBrowserCard navigate={navigate} />;
};

export default SchoolBrowser;
