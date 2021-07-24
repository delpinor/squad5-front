import React from "react";
import SpinnerCenter from "./SpinnerCenter";
import SearchForm from "./SearchForm";
import { Link } from "react-router-dom";
import { getTasks, deleteTaskById } from "../services/tasks";
import { readableStatus, readablePriority } from "../services/helpers";
import { Modal, ModalBody, ModalFooter } from "react-bootstrap";
import ResultMessage from "./ResultMessage";
import "./static/taskList.css";
import Employee from "./Employee";

class TaskList extends React.Component {
  constructor(props) {
    super(props);
    this.deleteTask = this.deleteTask.bind(this);
    this.state = {
      idProject: this.props.idProject,
      tasks: [],
      isReady: false,
      taskToDelete: "",
      showModalTask: false,
      taskSelectedDescription: "",
      taskSelectedName: "",
      showModalDescription: false,
    };
  }

  async componentDidMount() {
    this.getTaskList();
  }
  getTaskList = async () => {
    const tasksResponse = await getTasks(this.state.idProject, "");
    this.setState({ tasks: tasksResponse, isReady: true });
  };
  setTaskToDelete = (idTask) => {
    this.setState({ taskToDelete: idTask });
  };

  setTaskInfo = (name, description) => {
    this.setState({
      taskSelectedDescription: description,
      taskSelectedName: name,
      showModalDescription: true,
    });
  };
  submitSearch = async (searchTerm) => {
    this.setState({ isReady: false });
    const response = await getTasks(this.state.idProject, searchTerm);
    this.setState({ tasks: response, isReady: true });
  };
  deleteTask = async () => {
    await deleteTaskById(this.state.idProject, this.state.taskToDelete);
    this.setState({ showModalTask: false });
    this.getTaskList();
  };

  render() {
    const { idProject, tasks, isReady } = this.state;
    if (!isReady) {
      return <SpinnerCenter />;
    }
    return (
      <>
        <div class="form-group row ">
          <div class="col-7 col-sm-5 col-form-label">
            <SearchForm getByName={this.submitSearch} />
          </div>
          <div class="col-sm-5 col-form-label">
            <Link to={`/proyectos/${idProject}/tarea/crear`}>
              <button
                type="button"
                className="btn btn-success add-task-button"
                title="Agregar tarea"
              >
                Agregar Tarea
              </button>
            </Link>
          </div>
        </div>
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
                <th scope="col">Acciones</th>
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
                    <div>
                      <button
                        title="Ver descripción"
                        class="btn btn-primary button"
                        onClick={() => {
                          this.setTaskInfo(task.name, task.description);
                        }}
                      >
                        <i class="bi bi-eye"></i>
                      </button>
                      <Link
                        to={`/proyecto/${idProject}/${task.task_id}/editar`}
                      >
                        <button
                          type="button"
                          className="btn btn-info button"
                          title="Editar tarea"
                        >
                          <i class="bi bi-pencil-square"></i>
                        </button>
                      </Link>
                      <button
                        type="button"
                        title="Eliminar tarea"
                        onClick={() => {
                          this.setState({ showModalTask: true });
                          this.setTaskToDelete(task.task_id);
                        }}
                        className="btn delete-task-button"
                        key={task.task_id}
                      >
                        <i class="bi bi-trash"></i>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <Modal show={this.state.showModalTask}>
          <Modal.Header>
            <Modal.Title>
              <p style={{ color: "Orange" }}>Alerta</p>
            </Modal.Title>
          </Modal.Header>
          <ModalBody>
            ¿Confirma la eliminación de la tarea seleccionada?
          </ModalBody>
          <ModalFooter>
            <button
              className="btn delete-task-button"
              onClick={() => this.deleteTask()}
            >
              Sí
            </button>
            <button
              className="btn btn-primary"
              onClick={() => {
                this.setState({ showModalTask: false });
              }}
            >
              No
            </button>
          </ModalFooter>
        </Modal>
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

export default TaskList;
