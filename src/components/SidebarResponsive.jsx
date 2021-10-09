import React, {useState} from 'react'
import { Link } from 'react-router-dom';

const SidebarResponsive= () => {
    const [mostrarNavegacion,setMostrarNavegacion] = useState(false);
    return (
        <div className="lg:hidden"
        onClick={() => {
            setMostrarNavegacion(!mostrarNavegacion);
        }}
        >
            <i
                className={`mx-2 fas fa-${
                mostrarNavegacion ? 'times' : 'bars'
                } hover:text-yellow-600 cursor-pointer`}
            />
            {mostrarNavegacion && (
                <ul className="bg-gray-900">
                    <NavbarRoute nombre="Inicio" ruta="/Home" />
                    <NavbarRoute nombre="Registro de Ventas" ruta="/Ventas" />
                    <NavbarRoute nombre="Gestión de Ventas" ruta="/BuscarActualizarVentas" />
                    <NavbarRoute nombre="Gestión de Productos" ruta="/gestionProducto" />
                    <NavbarRoute nombre="Gestión de Usuarios" ruta="/gestionUsuarios" />
                </ul>
            )

            }

        </div>
    );
};

const NavbarRoute = ({ruta, nombre}) => {
    return(
        <Link to={ruta}>
            <li className="text-gray-200 border border-gray-300 p-1">{nombre}</li>
        </Link>
    )
}

export default SidebarResponsive
