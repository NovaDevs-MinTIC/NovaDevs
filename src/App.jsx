import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'styles/App.scss'
import 'styles/Home.css'
import Login from 'pages/login';
import Home from 'pages/Home';
import Ventas from 'pages/Ventas';
import BuscarActualizarVentas from 'pages/BuscarActualizarVentas';
import GestionProducto from 'pages/gestionProducto';
import Usuarios from 'pages/gestionUsuarios';
import PrivateLayout from 'Layouts/PrivateLayout';
import LoginLayout from 'Layouts/LoginLayout';
import { Auth0Provider } from "@auth0/auth0-react";
import PrivateRoute from 'components/PrivateRoute';


function App() {
  return (
    <div className='App'>
      <Auth0Provider
      domain="novadevs.us.auth0.com"
      clientId="aBmaNrxZ6TjfoMqTa5lUzhabnxXlEzmr"
      redirectUri='http://localhost:3000/home'
      audience='api-autenticacion-novadevs'>
        <Router>
          <Switch>
            <Route path={['/home', '/ventas', '/BuscarActualizarVentas', '/gestionProducto', '/gestionUsuarios']}>
              <PrivateRoute>
                <PrivateLayout>
                    <Switch>
                      <Route path='/home'>
                        <Home />
                      </Route>
                      <Route path='/ventas'>
                        <Ventas />
                      </Route>
                      <Route path='/BuscarActualizarVentas'>
                        <BuscarActualizarVentas />
                      </Route>
                      <Route path='/gestionProducto'>
                        <GestionProducto />
                      </Route>
                      <Route path='/gestionUsuarios'>
                        <Usuarios />
                      </Route>
                    </Switch>
                </PrivateLayout>
              </PrivateRoute>
            </Route>

            <Route path={['/']}>
              <LoginLayout>
                <Route path='/'>
                  <Login />
                </Route>
              </LoginLayout>
            </Route>
          </Switch>
        </Router>
      </Auth0Provider>
    </div>
  );
}

export default App;
