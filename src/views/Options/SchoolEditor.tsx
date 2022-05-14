import React from "react";
import SchoolEditorCard from "../../components/options/school/editor/SchoolEditorCard";
import { useNavigate, useParams } from "react-router-dom";

const SchoolEditor = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  return <SchoolEditorCard id={id!} navigate={navigate} />;
};

export default SchoolEditor;
