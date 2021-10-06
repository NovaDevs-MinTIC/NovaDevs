import React from 'react'
import Logo from 'media/logo.png'
import { Link } from 'react-router-dom'
import useActiveRoute from 'hooks/useActiveRoute'

const Sidebar = () => {
    return (
        <nav className="hidden lg:flex lg:w-72 border border-gray-300 h-full flex-col bg-gray-200 p-4 sidebar">
            <Link to="/">
                <Logo />
            </Link>

            <div className="my-4">
                <Ruta icono="fas fa-home" ruta="/home" nombre="Inicio" />
                <Ruta icono="fas fa-cart-plus" ruta="/ventas" nombre="Registro de Ventas" />
                <Ruta icono="fas fa-calendar" ruta="/BuscarActualizarVentas" nombre="Gestion de Ventas" />
                <Ruta icono="fas fa-th-large" ruta="/registroProductoNuevo" nombre="Registro de Productos" />
                <Ruta icono="fas fa-shopping-bag" ruta="/gestionProducto" nombre="Gestion de Productos" />
                <Ruta icono="fas fa-user-cog" ruta="/gestionUsuarios" nombre="Gestion de Usuarios" />
            </div>
            <div>
                <i class="fas fa-sign-out-alt"></i>
                <button>Cerrar Sesión</button>
            </div>
        </nav>
    )
}

const Ruta = ({ icono, ruta, nombre }) => {
    const isActive = useActiveRoute(ruta);
    return (
      <Link to={ruta}>
        <button
          className={`p-1 my-2  bg-${
            isActive ? 'indigo' : 'gray'
          }-700 hover:bg-indigo-900 flex w-full items-center text-white rounded-md`}
        >
          <i className={`${icono} w-10`} />
          {nombre}
        </button>
      </Link>
    );
  };

export default Sidebar
