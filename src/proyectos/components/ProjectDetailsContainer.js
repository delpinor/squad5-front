import React from "react";
import Navigation_bar from "../../shared/navbar";
import ProjectDetails from "./ProjectDetails";

export default function ProjectDetailsContainer(props) {
  return (
    <>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <i href="/home" class="bi bi-house-door-fill" />
            <a href="/home"> Inicio</a>
          </li>
          <li class="breadcrumb-item">
            <a href="/proyectos">Proyectos</a>
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            Detalles
          </li>
        </ol>
      </nav>
      <ProjectDetails idProject={props.match.params.idProject} />
    </>
  );
}
