import React from "react";
import { Modal } from "react-bootstrap";

const ModalOK = ({ show, message }) => (
  <Modal show={show}>
    <div class="alert alert-success" role="alert">
      <h4 class="alert-heading">{message}</h4>
    </div>
  </Modal>
);

export default ModalOK;
