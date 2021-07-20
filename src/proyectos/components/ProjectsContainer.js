import React from "react";
import Navigation_bar from "../../shared/navbar";
import Projects from "./Projects";

export default function ProjectsContainer() {
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
              Proyectos
            </li>
          </ol>
        </nav>
      </div>
      <Projects />
    </>
  );
}
