import Tabla from '../components/tablaUsuarios';
import "bootstrap/dist/css/bootstrap.min.css";
import '../styles/usuarios.css';

const  Usuarios = () => {
    return(
        <div className='flex h-full w-full flex-col items-center justify-start p-8'>
          <div className='flex flex-col w-full mt-12'>
            <h2 className='text-3xl font-extrabold text-gray-900 text-center'>
              Gestión de Usuarios
            </h2>
          </div>
          <div className='flex flex-row items-center justify-center w-full mt-20'>
            <input
              placeholder='Buscar por nombre'
              className='border-2 border-novablue mx-2 px-3 py-1 self-start rounded-md focus:outline-none focus:border-gray-500'
            />
            <input
              placeholder='Buscar por email'
              className='border-2 border-novablue mx-2 px-3 py-1 self-start rounded-md focus:outline-none focus:border-gray-500'
            />
          </div>

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