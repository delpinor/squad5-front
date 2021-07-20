import React from "react";
import ProjectDetails from "./ProjectDetails";

export default function ProjectDetailsContainer(props) {
  return (
    <>
      <div class="pl-1 pt-2">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <i href="/home" class="bi bi-house-door-fill m-2" />
              <a href="/home">Inicio</a>
            </li>
            <li class="breadcrumb-item">
              <a href="/proyectos">Proyectos</a>
            </li>
            <li class="breadcrumb-item active" aria-current="page">
              Detalles
            </li>
          </ol>
        </nav>
      </div>
      <ProjectDetails idProject={props.match.params.idProject} />
    </>
  );
}
