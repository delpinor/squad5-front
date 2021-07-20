import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./Home";
import Resources from "./recursos/Resources";

import Support from "./soporte/Support";
import SupportTicketGrid from "./soporte/SupportTicketGrid";
import TicketDetails from "./soporte/TicketDetails";
import CargaDeHoras from "./recursos/CargaDeHoras";
import ProjectDetailsContainer from "./proyectos/components/ProjectDetailsContainer";
import ProjectsContainer from "./proyectos/components/ProjectsContainer";

import Navigation_bar from "./shared/navbar";
import ProjectEditContainer from "./proyectos/components/ProjectEditContainer";
import TaskEditContainer from "./proyectos/components/TaskEditContainer";

function App() {
  return (
    <Router>
      <div>
        <Navigation_bar />
        <Switch>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/proyectos">
            <ProjectsContainer />
          </Route>
          <Route
            exact
            path="/proyectos/:idProject"
            component={ProjectDetailsContainer}
          ></Route>
          <Route
            exact
            path="/proyectos/:idProject/editar"
            component={ProjectEditContainer}
          ></Route>
          <Route
            exact
            path="/proyectos/crear"
            component={ProjectEditContainer}
          ></Route>
          <Route
            exact
            path="/proyectos/:idProject/:idTask/editar"
            component={TaskEditContainer}
          ></Route>
          <Route
            exact
            path="/proyectos/:idProject/crear"
            component={TaskEditContainer}
          ></Route>
          <Route exact path="/recursos">
            <Resources />
          </Route>
          <Route exact path="/recursos/horas">
            <CargaDeHoras />
          </Route>
          <Route exact path="/soporte/productos">
            <Support />
          </Route>
          <Route exact path="/soporte/productos/:idProducto">
            <SupportTicketGrid />
          </Route>
          <Route exact path="/soporte/tickets/:idTicket">
            <TicketDetails />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
