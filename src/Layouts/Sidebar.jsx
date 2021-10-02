import { NavLink } from 'react-router-dom'
import * as FaIcons from 'react-icons/fa'
import Logo from 'media/logo.png'
function Sidebar(){
    return(
        <div className="sidebar">  
    <ul>
    <img src={Logo} alt="" className="logo"/>
    <hr></hr>

        <li>
            <NavLink to="/" exact className="mr-2 rounded py-1 w-100 d-inline-block px-1 text-white " 
            activeClassName="active"><FaIcons.FaHome/> Inicio</NavLink>
        </li>
        <li>
            <NavLink to="/Ventas" exact className="mr-2 text-white rounded py-1 w-100 d-inline-block px-1" 
            activeClassName="active"><FaIcons.FaShoppingCart/> Registro de Ventas</NavLink>
        </li>
        <li>
            <NavLink to="/BuscarActualizarVentas" exact className="mr-2 text-white rounded py-1 w-100 d-inline-block px-1" 
            activeClassName="active"><FaIcons.FaRegCalendar/> Gestión de Ventas</NavLink>
        </li>
        <li>
            <NavLink to="/registroProductoNuevo" exact className="mr-2 text-white rounded py-1 w-100 d-inline-block px-1"
             activeClassName="active"><FaIcons.FaThLarge/> Registro de Productos</NavLink>
        </li>
        <li>
            <NavLink to="/registroProducto" exact className="mr-2 text-white rounded py-1 w-100 d-inline-block px-1"
             activeClassName="active"><FaIcons.FaShoppingBag/> Gestión de Productos</NavLink>
        </li>
        <li>
            <NavLink to="/gestionUsuarios" exact className="mr-2 text-white rounded py-1 w-100 d-inline-block px-1"
             activeClassName="active"><FaIcons.FaUserCog/> Gestión de Usuarios</NavLink>
        </li>
        <hr id="hr-final"></hr>
        <li>
            <NavLink id="logout" to="/logout" exact className="mr-2 text-white rounded py-1 w-100 d-inline-block px-1"
             activeClassName="active"><FaIcons.FaSignOutAlt/> Cerrar Sesión</NavLink>
        </li>
     
    </ul>
        </div>
    )
}
export default Sidebar