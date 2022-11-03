import React from "react";
import "./Project.css";
import { useParams } from "react-router-dom";
import { useDocument } from "../../hooks/useDocument";
import ProjectSummary from "./ProjectSummary";

export default function Project() {
  const { id } = useParams();
  const { document, error } = useDocument("projects", id);

  return (
    <div className="project-details">
      {error && <p className="error">{error}</p>}
      {!document && <div className="loading">Loading...</div>}
      {document && <ProjectSummary project={document} />}
    </div>
  );
}
