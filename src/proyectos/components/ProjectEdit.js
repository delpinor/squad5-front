import React from "react";

class ProjectEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      idProject: this.props.idProject,
    };
  }
  render() {
    return (
      <>
        idProject:
        {this.state.idProject}
      </>
    );
  }
}

export default ProjectEdit;
