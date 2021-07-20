import React from "react";
import ProjectEdit from "./ProjectEdit";

export default function ProjectEditContainer(props) {
  const idProject = props.match.params.idProject;
  const idTask = props.match.params.idTask;

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
              <a href="/Proyectos">Proyectos</a>
            </li>
            <li class="breadcrumb-item">
              <a href={"/proyectos/" + idProject}>Proyecto {idProject}</a>
            </li>
            <li class="breadcrumb-item active" aria-current="page">
              Editar??
            </li>
          </ol>
        </nav>
      </div>
      <ProjectEdit idProject={idProject} idTask={idTask} />
    </>
  );
}
