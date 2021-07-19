import React from "react";

const ResultMessage = ({ message }) => (
  <div class="alert alert-danger" role="alert">
    {message}
  </div>
);

export default ResultMessage;
