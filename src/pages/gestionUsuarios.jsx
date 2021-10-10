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
                <button className=' bg-novablue rounded border-novablue border-2 p-1 focus:outline-none focus:border-gray-500 text-white'>
                  Buscar
                </button>
            </div>
          {/* Tabla */}
          <div className='hidden md:flex w-full mt-12'>
            <table className="tabla">
              <thead className="text-center">
                <tr>
                  <th>Nombre</th>
                  <th>Correo electrónico</th>
                  <th>Rol</th>
                  <th>Estado</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
              <tr className="text-center">
               <td >Luis Forero</td>
               <td>luisforero@gmail.com</td>
               <td className="text-center">
               <select className="rounded-lg m-2 w-auto">
               <option disabled>Rol</option>
               <option>Vendedor</option>
               <option>Administrador</option>
               </select>
              </td>
              <td className="text-center">
              <select className="rounded-lg m-2 w-auto">
              <option disabled>Estado</option>
              <option>Pendiente</option>
              <option>Aceptado</option>
              <option>Rechazado</option>
              </select>  
             </td>
            <td className='text-center'>
            <div className="flex justify-around">
            <button className="rounded border-solid border-2 border-novablue far fa-edit bg-info"></button>
            <button className="rounded border-solid border-2 border-red-600 far fa-trash-alt bg-danger"></button>
            </div>
            </td>
            </tr>
           </tbody>
          </table>
        </div>
      </div>
          )
}
export default Usuarios;

