

const Tabla = ({correo, nombre}) => {
    return(
      <tr>
          <td>{correo}</td>
          <td>{nombre}</td>
          <td className="active">
            <select className="Rol ">
              <option>...</option>
              <option>Vendedor</option>
              <option>Administrador</option>
            </select>
          </td>
          <td className="active">
            <select className="Estado ">
              <option>...</option>
              <option>Pendiente</option>
              <option>Aceptado</option>
              <option>Rechazado</option>
            </select>  
          </td>
      </tr>
    )
  }

  export default Tabla;


  

  