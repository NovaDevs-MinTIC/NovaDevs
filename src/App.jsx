import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'styles/App.scss'
import 'styles/Home.css'
import Login from 'pages/login';
// import Home from 'pages/Home'
// import Ventas from 'pages/Ventas';
// import BuscarActualizarVentas from 'pages/BuscarActualizarVentas';
// import RegistroProducto from 'pages/RegistroProducto';
// import GestionProducto from 'pages/gestionProducto'
// import Usuarios from 'pages/gestionUsuarios'
// import PrivateLayout from 'Layouts/PrivateLayout';
import LoginLayout from 'Layouts/LoginLayout';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          {/* <Route path={["/Home", "/ventas", "/BuscarActualizarVentas", "/RegistroProducto", "/gestionUsuarios", "/gestionProducto" ]}>
            <PrivateLayout>
              <Switch>
              <Route path="/Home">
                  <Home></Home>
                </Route>
                <Route path="/ventas">
                  <Ventas></Ventas>
                </Route>
                <Route path="/BuscarActualizarVentas">
                  <BuscarActualizarVentas></BuscarActualizarVentas>
                </Route>
                <Route path="/RegistroProducto">
                  <RegistroProducto></RegistroProducto>
                </Route>
                <Route path="/gestionProducto">
                  <GestionProducto />
                </Route>
                <Route path="/gestionUsuarios">
                  <Usuarios></Usuarios>
                </Route>
              </Switch>
            </PrivateLayout>
          </Route> */}
          <Route path={['/']}>
              <LoginLayout>
                <Switch>
                  <Route path='/'>
                    <Login />
                  </Route>
                </Switch>
              </LoginLayout>
            </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
