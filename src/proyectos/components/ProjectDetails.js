import React from "react";
import { getProjectById } from "../services/projects";
import SpinnerCenter from "./SpinnerCenter";
import SearchForm from "./SearchForm";

class ProjectDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      idProject: this.props.idProject,
      projectInfo: "",
      tasks: [],
      isReady: false,
    };
  }
  async componentDidMount() {
    const response = await getProjectById(this.state.idProject);
    this.setState({ projectInfo: response, isReady: true });
    console.log(this.state.projectInfo);
  }

  render() {
    const projectInfo = this.state.projectInfo;
    return (
      <>
        <div class="row pl-3">
          <div class="col-5">
            <h3>{projectInfo.name}</h3>
          </div>
          <div class="col-2">
            <h3>Tareas</h3>
          </div>
          <div class="col-5">
            <SearchForm />
          </div>
        </div>
        {!this.state.isReady && <SpinnerCenter />}
        <div class="container-fluid">
          <div class="row">
            <div class="col-5 px-md-3">
              <form>
                <div class="form-group row">
                  <label class="col-sm-3 col-form-label">Id. de Proyecto</label>
                  <div class="col-sm-6">
                    <input
                      type="text"
                      value={projectInfo.id}
                      readonly
                      class="form-control-plaintext"
                    />
                  </div>
                </div>
                <div class="form-group row">
                  <label class="col-sm-3 col-form-label">Nombre</label>
                  <div class="col-sm-6">
                    <input
                      type="text"
                      value={projectInfo.name}
                      readonly
                      class="form-control-plaintext"
                    />
                  </div>
                </div>
                <div class="form-group row">
                  <label class="col-sm-3 col-form-label">Descripción</label>
                  <div class="col-sm-6">
                    <input
                      type="text"
                      value={projectInfo.description}
                      readonly
                      class="form-control-plaintext"
                    />
                  </div>
                </div>
                <div class="form-group row">
                  <label class="col-sm-3 col-form-label">Líder</label>
                  <div class="col-sm-6">
                    <input
                      type="text"
                      value={projectInfo.leader_id}
                      readonly
                      class="form-control-plaintext"
                    />
                  </div>
                </div>
                <div class="form-group row">
                  <label class="col-sm-3 col-form-label">Inicio planeado</label>
                  <div class="col-sm-6">
                    <input
                      type="text"
                      value={projectInfo.leader_id}
                      readonly
                      class="form-control-plaintext"
                    />
                  </div>
                </div>
                <div class="form-group row">
                  <label class="col-sm-3 col-form-label">Inicio real</label>
                  <div class="col-sm-6">
                    <input
                      type="text"
                      readonly
                      class="form-control-plaintext"
                    />
                  </div>
                </div>
                <div class="form-group row">
                  <label class="col-sm-3 col-form-label">
                    Finalización planeada
                  </label>
                  <div class="col-sm-6">
                    <input
                      type="text"
                      readonly
                      class="form-control-plaintext"
                    />
                  </div>
                </div>
                <div class="form-group row">
                  <label class="col-sm-3 col-form-label">
                    Finalización real
                  </label>
                  <div class="col-sm-6">
                    <input
                      type="text"
                      readonly
                      class="form-control-plaintext"
                    />
                  </div>
                </div>
                <div class="form-group row">
                  <label class="col-sm-3 col-form-label">Prioridad</label>
                  <div class="col-sm-6">
                    <select id="inputState" class="form-control">
                      <option selected>Choose...</option>
                      <option>...</option>
                    </select>{" "}
                  </div>
                </div>
                <div class="form-group row">
                  <label class="col-sm-3 col-form-label">Estado</label>
                  <div class="col-sm-6">
                    <select id="inputState" class="form-control">
                      <option selected>Choose...</option>
                      <option>...</option>
                    </select>{" "}
                  </div>
                </div>
              </form>
            </div>
            <div class="col-7">
              <table class="table table-hover">
                <thead>
                  <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Creación</th>
                    <th scope="col">Prioridad</th>
                    <th scope="col">Estado</th>
                    <th scope="col">Detalles</th>
                  </tr>
                </thead>
              </table>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ProjectDetails;
