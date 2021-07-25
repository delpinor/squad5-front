import React from "react";
import { Modal } from "react-bootstrap";
import "./static/modalMessage.css";

const ModalOK = ({ show, message }) => (
  <Modal show={show}>
    <div class="alert alert-success task-message" role="alert">
      <h4 class="alert-heading">{message}</h4>
    </div>
  </Modal>
);

export default ModalOK;
