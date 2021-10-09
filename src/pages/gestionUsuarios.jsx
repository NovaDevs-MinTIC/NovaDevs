import Tabla from '../components/tablaUsuarios';
import "bootstrap/dist/css/bootstrap.min.css";
import '../styles/usuarios.css';

const  Usuarios = () => {
    return(
        <div className='w-full h-full'>
          {/*Título*/}
          <div className='flex items-center justify-center w-full h-1/6'>
                <h2 className='text-4xl font-extrabold text-gray-900'>
                Gestión de Usuarios
                </h2>
            </div>
            {/*Barras de búsqueda para la tabla */}
            <div className='flex items-center justify-center w-full h-auto'>
                <input
                placeholder='Búsqueda por Nombre'
                className='border-2 border-novablue mx-2 px-3 py-1 rounded-md focus:outline-none focus:border-gray-500'
                />
                <input
                placeholder='Búsqueda por e-mail'
                className='border-2 border-novablue mx-2 px-3 py-1 rounded-md focus:outline-none focus:border-gray-500'
                />
            </div>
          {/* Tabla */}
          <div className='hidden md:flex w-full mt-12'>
            <table className="tabla">
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Correo electrónico</th>
                  <th>Rol</th>
                  <th>Estado</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                <Tabla correo="luisforero12@gmail.com" nombre="Luis Forero"/>
                <Tabla correo="carodiaz17@gmail.com" nombre="Carolina Díaz"/>
                <Tabla correo="shr_1982@gmail.com" nombre="Alberto Vélez "/>
                <Tabla correo="saranghe@gmail.com" nombre="Cielo López"/>
              </tbody>
            </table>
          </div>
        </div>
          )
}
export default Usuarios;