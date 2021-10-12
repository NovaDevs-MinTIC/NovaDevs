import React from 'react'
import ImagenLogo from './ImagenLogo'
import { Link } from 'react-router-dom'
import useActiveRoute from 'hooks/useActiveRoute'
import { useAuth0 } from "@auth0/auth0-react";

const Sidebar = () => {
  const { logout } = useAuth0();
    return (
        <nav className="hidden lg:flex lg:w-80 h-full flex-col bg-color-#0A1931 p-4 sidebar">
              <Link to="/">
                  <ImagenLogo />
              </Link>

            <div className="my-4">
                <Ruta icono="fas fa-home" ruta="/Home" nombre="Inicio" />
                <Ruta icono="fas fa-cart-plus" ruta="/ventas" nombre="Registro de Ventas" />
                <Ruta icono="fas fa-calendar" ruta="/BuscarActualizarVentas" nombre="Gestión de Ventas" />
                <Ruta icono="fas fa-shopping-bag" ruta="/gestionProducto" nombre="Gestión de Productos" />
                <Ruta icono="fas fa-user-cog" ruta="/gestionUsuarios" nombre="Gestión de Usuarios" />
            </div>
            <hr className="mt-4"/>
            <div>
              <button
                className={`p-1 my-4  hover:bg-novablue flex w-full items-center text-white rounded-md`}
                onClick={() => logout({ returnTo: window.location.origin })}
              >
                <i className='fas fa-sign-out-alt w-10' />
                <span>Cerrar Sesión</span>
              </button>
            </div>
        </nav>
    )
}

const Ruta = ({ icono, ruta, nombre }) => {
    const isActive = useActiveRoute(ruta);
    return (
      <Link to={ruta}>
        <button
          className={`p-1 my-4  bg-${
            isActive ? 'novablue' : 'gray-700'
          } hover:bg-novablue flex w-full items-center text-white rounded-md`}
        >
          <i className={`${icono} w-10`} />
          {nombre}
        </button>
      </Link>
    );
  };

export default Sidebar
