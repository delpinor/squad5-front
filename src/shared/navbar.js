import React from "react";

import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import "./navbar.css";

export default function Navigation_bar() {
  return (
    <Navbar bg="color_custom_nav" variant="dark" expand="lg">
      <Navbar.Brand className="mx-3" href="/home">
        PSA
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/soporte/productos" className="mx-3">
            Soporte
          </Nav.Link>
          <NavDropdown
            className="mx-3"
            title="Proyectos"
            id="basic-nav-dropdown"
          >
            <NavDropdown.Item href="/proyectos">Ver Proyectos</NavDropdown.Item>
            <NavDropdown.Item href="/proyectos/ver">
              Crear Proyectos
            </NavDropdown.Item>
            <NavDropdown.Item href="/proyectos/tareas/ver">
              Ver Tareas
            </NavDropdown.Item>
            <NavDropdown.Item href="/proyectos/tareas">
              Crear Tareas
            </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown
            className="mx-3"
            title="Recursos"
            id="basic-nav-dropdown"
          >
            <NavDropdown.Item href="/recursos">
              Visualizar Recursos
            </NavDropdown.Item>
            <NavDropdown.Item href="/recursos/horas">
              Carga de horas
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
