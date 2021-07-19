import React from "react";
import { Button, Spinner } from "react-bootstrap";
import "./static/projects.css";

const SpinnerCenter = () => (
  <div class="center-screen">
    <Spinner animation="border" role="status"/>
    <span class="h6">Cargando...</span>

  </div>
);
export default SpinnerCenter;
