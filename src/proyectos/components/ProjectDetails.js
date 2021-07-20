import React from "react";
import { getProjectById, deleteProjecyById } from "../services/projects";
import { readableStatus, readablePriority } from "../services/helpers";
import TaskList from "./TaskList";
import { Row, Container, Col } from "react-bootstrap";
import { Link, Redirect } from "react-router-dom";
import { Modal, ModalBody, ModalFooter } from "react-bootstrap";

class ProjectDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      idProject: this.props.idProject,
      projectInfo: "",
      showModalProject: false,
      redirect: false,
    };
  }

  async componentDidMount() {
    const projectResponse = await getProjectById(this.state.idProject);
    this.setState({ projectInfo: projectResponse });
  }

  deleteProject = async () => {
    const response = await deleteProjecyById(this.state.idProject);
    this.setState({ showModalProject: false, redirect: true });
  };
  render() {
    const { idProject, redirect, projectInfo } = this.state;
    return (
      <>
        <Container fluid>
          <h3>{projectInfo.name}</h3>
          <Link to={`/proyectos/${idProject}/editar`}>
            <button
              type="button"
              className="btn btn-info"
              title="Editar datos del proyecto"
            >
              Editar proyecto
            </button>
          </Link>
          <button
            onClick={() => this.setState({ showModalProject: true })}
            type="button"
            className="btn btn-danger"
            title="Eliminar proyecto"
          >
            Eliminar proyecto
          </button>
          <Row>
            <Col>
              <p>Id. de Proyecto:</p>
              <p>{projectInfo.id}</p>
            </Col>
            <Col>
              <p>Líder de proyecto:</p>
              <p>{projectInfo.leader_id}</p>
            </Col>
            <Col>
              <p>Prioridad:</p>
              <p>{readablePriority(projectInfo.priority)}</p>
            </Col>
            <Col>
              <p>Estado:</p>
              <p>{readableStatus(projectInfo.status)}</p>
            </Col>
            <Col>
              <p>Inicio planeado:</p>
              <p>{projectInfo.planned_start_date}</p>
            </Col>
            <Col>
              <p>Fin planeado:</p>
              <p>{projectInfo.planned_end_date}</p>
            </Col>
            <Col>
              <p>Inicio real:</p>
              <p>{projectInfo.real_start_date}</p>
            </Col>
            <Col>
              <p>Fin real:</p>
              <p>{projectInfo.real_end_date}</p>
            </Col>
            <Col>
              <p>Descripción:</p>
              <p>{projectInfo.description}</p>
            </Col>
          </Row>
        </Container>
        <span class="border border-info">
          <div class="col-2">
            <h3>Tareas</h3>
          </div>
          <TaskList idProject={this.state.idProject} />
        </span>
        <Modal show={this.state.showModalProject}>
          <Modal.Header>
            <Modal.Title>Eliminación</Modal.Title>
          </Modal.Header>
          <ModalBody>
            ¿Confirma la eliminación del proyecto {projectInfo.name}? Si acepta
            será redirigido al listado de proyectos.
          </ModalBody>
          <ModalFooter>
            <button
              className="btn btn-danger"
              onClick={() => this.deleteProject()}
            >
              Sí
            </button>
            <button
              className="btn btn-primary"
              onClick={() => {
                this.setState({ showModalProject: false });
              }}
            >
              No
            </button>
          </ModalFooter>
        </Modal>
        {redirect && <Redirect to="/proyectos" />}
      </>
    );
  }
}

export default ProjectDetails;
