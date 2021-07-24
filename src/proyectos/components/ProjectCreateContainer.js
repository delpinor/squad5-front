import React from "react";
import ProjectEdit from "./ProjectEdit";

export default function ProjectCreateContainer(props) {
  return (
    <>
      <div class="pl-1 pt-2">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <i href="/home" class="bi bi-house-door-fill m-2" />
              <a href="/home">Inicio</a>
            </li>
            <li class="breadcrumb-item active" aria-current="page">
              Crear proyecto
            </li>
          </ol>
        </nav>
      </div>
      <ProjectEdit idProject={null} operation={"Crear"} />
    </>
  );
}
