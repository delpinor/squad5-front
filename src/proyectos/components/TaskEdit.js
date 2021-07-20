import React from "react";

class TaskEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      idProject: this.props.idProject,
      idTask: this.props.idTask,
    };
  }
  render() {
    return (
      <>
        idProject: {this.state.idProject}
        idTask: {this.state.idTask}
      </>
    );
  }
}

export default TaskEdit;
