import './App.css';
import Home from './home/Home';
import Header from './header/Header';
import Footer from './footer/Footer';
import Login from './login/Login';
import { BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import Contacto from './contacto/Contacto';
import About from './about/About';
import { AppContext } from './lib/contextLib';
import { useState } from 'react';
import { withRouter } from 'react-router';
import InfoPaciente from './infoPaciente/InfoPaciente';

function App() {

  const [isAuthenticated, userHasAuthenticated] = useState(false);

  const [location, setLocation] = useState("/home");

  const ChangeTracker = withRouter(({location}) => {
    setLocation(location.pathname);
    return false;
  })

  return (
    <>
      <AppContext.Provider value={{ isAuthenticated, userHasAuthenticated }}>
      <Header location={location}/>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Redirect to="/home"/>
          </Route>
          <Route path="/home" exact component={Home} />
          <Route path="/login" exact component={Login} />
          <Route path="/about" exact component={About} />
          <Route path="/contact" exact component={Contacto} />
          <Route path="/info/:id" exact component={InfoPaciente} />
        </Switch>
        <ChangeTracker/>
      </BrowserRouter>
      <Footer/>
      </AppContext.Provider>
    </>
  );
}

export default App;
