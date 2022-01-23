import React from "react";
import EditorCard from "../../components/options/school/forms/editor/EditorCard";
import { useNavigate, useParams } from "react-router-dom";

const SchoolFormEditor = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  return <EditorCard id={id!} navigate={navigate} />;
};

export default SchoolFormEditor;
