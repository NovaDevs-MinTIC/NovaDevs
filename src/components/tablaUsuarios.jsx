

const Tabla = ({correo, nombre}) => {
    return(
      <tr>
          <td>{nombre}</td>
          <td>{correo}</td>
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
              <div className="hover:bg-yellow-500"> 
                <i className="fas fa-edit"></i>
              </div>
              <div className="hover:bg-red-600">
                <i className="fas fa-trash"></i>
              </div>
            </div>
          </td>
      </tr>
    )
  }

  export default Tabla;


  

  