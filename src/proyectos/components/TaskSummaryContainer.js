import React from "react";
import { getProjects } from "../services/projects";
import SpinnerCenter from "./SpinnerCenter";
import ResultMessage from "./ResultMessage";
import TaskSummary from "./TaskSummary";

class TaskSummaryContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [],
      isReady: false,
    };
  }
  async componentDidMount() {
    const response = await getProjects("");
    if (response) this.setState({ projects: response, isReady: true });
  }
  render() {
    const { isReady, projects } = this.state;
    if (!isReady) {
      return <SpinnerCenter />;
    }
    return (
      <>
        <div class="row pl-3">
          <div class="col">
            <h2>Listado de tareas</h2>
          </div>
        </div>
        {isReady && !projects.length && (
          <ResultMessage message="No se encontraron proyectos." />
        )}
        {projects.map((project) => (
          <div>
            <h4>Proyecto: {project.name}</h4>
            <TaskSummary idProject={project.id} />
          </div>
        ))}
      </>
    );
  }
}

export default TaskSummaryContainer;
