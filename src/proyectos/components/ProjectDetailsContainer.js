import React from "react";
import ProjectDetails from "./ProjectDetails";
import "./static/breadcrumb.css";

export default function ProjectDetailsContainer(props) {
  return (
    <body className="for-breadcrumb">
      <div className="pl-1 pt-2">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <i href="/home" className="bi bi-house-door-fill m-2" />
              <a href="/home">Inicio</a>
            </li>
            <li className="breadcrumb-item">
              <a href="/proyectos">Proyectos</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Detalles
            </li>
          </ol>
        </nav>
      </div>
      <ProjectDetails idProject={props.match.params.idProject} />
    </body>
  );
}
