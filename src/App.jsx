import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from 'pages/login';
import Ventas from 'pages/Ventas';
import Sidebar from 'Layouts/Sidebar';
import 'styles/App.scss'
import BuscarActualizarVentas from 'pages/BuscarActualizarVentas';
import RegistroProducto from 'pages/RegistroProducto';
import Usuarios from 'pages/gestionUsuarios'
import gestionProducto from 'pages/gestionProducto'

// function App() {
//   return (
//     <div className="App">
//       <Router>
//         <Switch>
//           <Route path={['/Ventas']}>
//             <Sidebar>
//               <Switch>
//                 <Route path="/Ventas" exact={true} component={Ventas}></Route>
//               </Switch>
//             </Sidebar>
//           </Route>
//           <Route path="/" exact={true} component={Login}></Route>
//         </Switch>
//       </Router>
//     </div>
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact={true} component={Login}></Route>
        <div className="flex w-100">
          <Sidebar />
          <div className="content">
            <Route path="/Ventas" exact={true} component={Ventas}></Route>
            <Route path="/BuscarActualizarVentas" exact={true} component={BuscarActualizarVentas}></Route>
            <Route path="/registroProductoNuevo" exact={true} component={RegistroProducto}></Route>
            <Route path="/gestionUsuarios" exact={true} component={Usuarios}></Route>
            <Route path="/gestionProducto" exact={true} component={gestionProducto}></Route>
          </div>
        </div>
      </Switch>
    </Router>
  );
}

export default App;
