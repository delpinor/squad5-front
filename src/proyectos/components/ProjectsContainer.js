import React from "react";
import Projects from "./Projects";
import "./static/breadcrumb.css";

export default function ProjectsContainer() {
  return (
    <body className="for-breadcrumb">
      <div className="pl-1 pt-2">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <i href="/home" className="bi bi-house-door-fill m-2" />
              <a href="/home">Inicio</a>
            </li>
            <li class="breadcrumb-item active" aria-current="page">
              Proyectos
            </li>
          </ol>
        </nav>
      </div>
      <Projects />
    </body>
  );
}
