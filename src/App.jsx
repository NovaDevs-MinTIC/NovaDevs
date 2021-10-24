import React, { useState} from 'react';
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
import { UserContext } from 'context/userContext';


function App() {
  const [userData, setUserData] = useState({});

  return (
    <Auth0Provider
    domain="novadevs.us.auth0.com"
    clientId="aBmaNrxZ6TjfoMqTa5lUzhabnxXlEzmr"
    redirectUri='http://localhost:3000/home'
    audience='api-autenticacion-novadevs'>
      <div className='App'>
        <UserContext.Provider value={{ userData, setUserData }}>
          <Router>
            <Switch>
              <Route path={['/home', '/ventas', '/BuscarActualizarVentas', '/gestionProducto', '/gestionUsuarios']}>
                  <PrivateLayout>
                      <Switch>
                        <Route path='/home'>
                          <PrivateRoute roleList={['Administrador', 'Vendedor', 'sin rol']}>
                            <Home />
                          </PrivateRoute>
                        </Route>
                        <Route path='/ventas'>
                          <PrivateRoute roleList={['Administrador', 'Vendedor', 'sin rol']}>
                            <Ventas />
                          </PrivateRoute>
                        </Route>
                        <Route path='/BuscarActualizarVentas'>
                          <PrivateRoute roleList={['Administrador', 'Vendedor', 'sin rol']}>
                            <BuscarActualizarVentas />
                          </PrivateRoute>
                        </Route>
                        <Route path='/gestionProducto'>
                          <PrivateRoute roleList={['Administrador', 'Vendedor', 'sin rol']}>
                            <GestionProducto />
                          </PrivateRoute>
                        </Route>
                        <Route path='/gestionUsuarios'>
                          <PrivateRoute roleList={['Administrador', 'Vendedor', 'sin rol']}>
                            <Usuarios />
                          </PrivateRoute>
                        </Route>
                      </Switch>
                  </PrivateLayout>
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
        </UserContext.Provider>
      </div>
    </Auth0Provider>
  );
}

export default App;
