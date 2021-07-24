import React from "react";
import { Spinner } from "react-bootstrap";
import "./static/projects.css";

const SpinnerCenter = () => (
  <div className="center-screen">
    <Spinner animation="border" role="status" />
    <span className="h6">Cargando...</span>
  </div>
);
export default SpinnerCenter;
