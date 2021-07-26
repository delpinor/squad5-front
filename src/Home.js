import React from "react";
import NavigationBar from "./shared/navbar";
import DashboardHomeCard from "./shared/card";
import "./home.css";

export default function Home() {
  return (
    <div style={{backgroundColor:'#eee' ,height:'100vh'}}>
      <h1 className="bienvenida" >Bienvenidos a PSA</h1>
      <div id="card_container" class="row justify-content-around">
        <DashboardHomeCard
          titulo="Proyectos"
          descripcion="Módulo para creación y visualización de proyectos y tareas."
          src_imagen="./proyecto.jpg"
          href="./proyectos"
        />
        <DashboardHomeCard
          titulo="Recursos"
          descripcion="Módulo para visualización de Recursos y Carga de Horas."
          src_imagen="./recursos.jpg"
          href="./recursos"
        />
        <DashboardHomeCard
          titulo="Soporte"
          descripcion="Modulo para visualizar y crear Tickets."
          src_imagen="./soporte.png"
          href="./soporte/productos"
        />
      </div>
    </div>
  );
}
