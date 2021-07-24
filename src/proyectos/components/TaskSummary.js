import React from "react";
import SpinnerCenter from "./SpinnerCenter";
import { getTasks } from "../services/tasks";
import { readableStatus, readablePriority } from "../services/helpers";
import ResultMessage from "./ResultMessage";
import "./static/taskList.css";
import Employee from "./Employee";
import { Modal, ModalBody, ModalFooter } from "react-bootstrap";

class TaskSummary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      idProject: this.props.idProject,
      nameProject: this.props.nameProject,
      taskSelectedDescription: "",
      taskSelectedName: "",
      showModalDescription: false,
      tasks: [],
      isReady: false,
    };
  }

  async componentDidMount() {
    this.getTaskList();
  }
  setTaskInfo = (name, description) => {
    this.setState({
      taskSelectedDescription: description,
      taskSelectedName: name,
      showModalDescription: true,
    });
  };
  getTaskList = async () => {
    const tasksResponse = await getTasks(this.state.idProject, "");
    this.setState({ tasks: tasksResponse, isReady: true });
  };
  render() {
    const { tasks, isReady } = this.state;
    if (!isReady) {
      return <SpinnerCenter />;
    }
    return (
      <>
        <div class="">
          {isReady && !tasks.length && (
            <ResultMessage message="No se encontraron tareas." />
          )}
          <table class="table table-hover">
            <thead>
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Nombre</th>
                <th scope="col">Creación</th>
                <th scope="col">Inicio</th>
                <th scope="col">Finalización</th>
                <th scope="col">Asigando a</th>
                <th scope="col">Prioridad</th>
                <th scope="col">Estado</th>
                <th scope="col">Ver descripción</th>
              </tr>
            </thead>
            <tbody>
              {tasks.map((task) => (
                <tr key={task.task_id}>
                  <th scope="row">{task.task_id}</th>
                  <td>{task.name}</td>
                  <td>{task.created_at}</td>
                  <td>{task.start_date}</td>
                  <td>{task.end_date}</td>
                  <td>
                    {task.employee_id ? task.employee_name : "No asignado"}
                  </td>
                  <td>{readablePriority(task.priority)}</td>
                  <td>{readableStatus(task.status)}</td>
                  <td>
                    <button
                      title="Ver descripción"
                      class="btn btn-primary button"
                      onClick={() => {
                        this.setTaskInfo(task.name, task.description);
                      }}
                    >
                      <i class="bi bi-eye"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Modal show={this.state.showModalDescription}>
          <Modal.Header>
            <Modal.Title>Tarea: {this.state.taskSelectedName}</Modal.Title>
          </Modal.Header>
          <ModalBody>{this.state.taskSelectedDescription}</ModalBody>
          <ModalFooter>
            <button
              className="btn btn-secondary"
              onClick={() => {
                this.setState({ showModalDescription: false });
              }}
            >
              Cerrar
            </button>
          </ModalFooter>
        </Modal>
      </>
    );
  }
}

export default TaskSummary;
