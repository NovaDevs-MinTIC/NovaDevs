import React from 'react'
import ImagenLogo from './ImagenLogo'
import { Link } from 'react-router-dom'
import useActiveRoute from 'hooks/useActiveRoute'

const Sidebar = () => {
    return (
        <nav className="hidden lg:flex lg:w-80 h-full flex-col bg-color-#0A1931 p-4 sidebar">
              <Link to="/">
                  <ImagenLogo />
              </Link>

            <div className="my-4">
                <Ruta icono="fas fa-home" ruta="/Home" nombre="Inicio" />
                <Ruta icono="fas fa-cart-plus" ruta="/ventas" nombre="Registro de Ventas" />
                <Ruta icono="fas fa-calendar" ruta="/BuscarActualizarVentas" nombre="Gestion de Ventas" />
                <Ruta icono="fas fa-th-large" ruta="/RegistroProducto" nombre="Registro de Productos" />
                <Ruta icono="fas fa-shopping-bag" ruta="/gestionProducto" nombre="Gestion de Productos" />
                <Ruta icono="fas fa-user-cog" ruta="/gestionUsuarios" nombre="Gestion de Usuarios" />
            </div>
            <div>
              <Ruta icono="fas fa-sign-out-alt" ruta="/" nombre="Cerrar Sesión" />
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
