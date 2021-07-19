import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './Home';
import ProjectsContainer from './proyectos/components/ProjectsContainer';
import Resources from './recursos/Resources';

import Support from './soporte/Support';
import SupportTicketGrid from './soporte/SupportTicketGrid';
import TicketDetails from './soporte/TicketDetails';
import CargaDeHoras from './recursos/CargaDeHoras';
import ProjectDetailsContainer from './proyectos/components/ProjectDetailsContainer';
import Navigation_bar from './shared/navbar';


function App() {
  return (
    <Router>
      <div>
      <Navigation_bar/>
        <Switch>
          <Route exact path="/home">
            <Home/>
          </Route>
          <Route exact path="/proyectos">
            <ProjectsContainer/>
          </Route>
          <Route exact path="/proyectos/:idProject"  component={ProjectDetailsContainer}>
          </Route>
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