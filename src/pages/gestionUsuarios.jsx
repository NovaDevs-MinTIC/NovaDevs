import { useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { Dialog, Tooltip } from '@material-ui/core';
import { nanoid } from 'nanoid';
import "bootstrap/dist/css/bootstrap.min.css";
import '../styles/usuarios.css';
import { obtenerUsuarios, editarUsuario, quitarUsuario } from 'utils/api';

const  Usuarios = () => {
  const [usuarios, setUsuarios] =useState([]);
  const [ejecutarConsulta, setEjecutarConsulta] = useState(true);

  useEffect(() => {
    if (ejecutarConsulta) {
        obtenerUsuarios(
          (response)=>{
              console.log('GET de gestion Usuarios: ', response);
              setUsuarios(response.data);
          },
          (error)=>{
            console.error(error);
          }
        );
        setEjecutarConsulta(false);
      }
}, [ejecutarConsulta]);

    return(
        <div className='w-full h-full'>
          <TablaUsuarios listaUsuarios={usuarios} setEjecutarConsulta = {setEjecutarConsulta} />
          <ToastContainer position='bottom-center' autoClose={3000} />
        </div>
          )
}

const FilaUsuario = ({usuario, setEjecutarConsulta}) => {
  const [edit, setEdit] = useState(false);
  const [openDialog,setOpenDialog] = useState(false);
  const [infoNuevoUsuario, setInfoNuevoUsuario] = useState({
    nombre : usuario.name,
    correo : usuario.email,
    rol : usuario.rol,
    estado : usuario.estado
});

const actualizarUsuario = async () =>{
  await editarUsuario(
    usuario._id,
    {...infoNuevoUsuario},
    (response)=>{
      console.log(response.data);
      toast.success('Usuario modificado con éxito');
      setEdit(false);
      setEjecutarConsulta(true);
    },
    (error)=>{
      toast.error('Error modificando el usuario');
      console.error(error);
    }
  )
}

const eliminarUsuario = async () => {
  await quitarUsuario(
    usuario._id,
    (response)=>{
      console.log(response.data);
      toast.success('Usuario eliminado con éxito');
      setEjecutarConsulta(true);
    },
    (error)=>{
      console.error(error);
      toast.error('Error eliminando el usuario');
    }
  )
  setOpenDialog(false);
  };

  return(
    <tr>
      {edit ? (
          <>
              <td className='text-center'>{infoNuevoUsuario.nombre}</td>
              <td className='text-center'>{infoNuevoUsuario.correo}</td>
              <td className='text-center'>
                <select 
                  className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-2'
                  value={infoNuevoUsuario.rol}
                  onChange={(e) => setInfoNuevoUsuario({ ...infoNuevoUsuario, rol: e.target.value })}
                  defaultValue='0'
                  >
                    <option disabled value="0">Seleccione una opción</option>
                    <option value="Vendedor">Vendedor</option>
                    <option value="Administrador">Administrador</option>
                  </select>
              </td>
              <td className='text-center'>
                <select 
                    className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-2'
                    type='select'
                    value={infoNuevoUsuario.estado}
                    onChange={(e) => setInfoNuevoUsuario({ ...infoNuevoUsuario, estado: e.target.value })}
                    defaultValue='0'
                >
                  <option disabled value="0">Seleccione una opción</option>
                  <option value="Pendiente">Pendiente</option>
                  <option value="Aceptado">Aceptado</option>
                  <option value="Rechazado">Rechazado</option>
                </select>
              </td>
          </>
      ) : (
          <>
              <td className='text-center'>{infoNuevoUsuario.nombre}</td>
              <td className='text-center'>{infoNuevoUsuario.correo}</td>
              <td className='text-center'>{infoNuevoUsuario.rol}</td>
              <td className='text-center'>{infoNuevoUsuario.estado}</td>
          </>
      )}
      <td>
          <div className='flex w-full justify-around'>
          {edit ? (
          <>
              <Tooltip title='Confirmar Edición' arrow>
                  <i
                  onClick={() => actualizarUsuario()}
                  className='fas fa-check text-green-700 hover:text-green-500'
                  />
              </Tooltip>
              <Tooltip title='Cancelar edición' arrow>
                  <i
                  onClick={() => setEdit(!edit)}
                  className='fas fa-ban text-yellow-700 hover:text-yellow-500'
                  />
              </Tooltip>
          </>
          ) : (
          <>
              <Tooltip title='Editar Usuario' arrow>
                  <i
                  onClick={() => setEdit(!edit)}
                  className='fas fa-pencil-alt text-yellow-700 hover:text-yellow-500'
                  />
              </Tooltip>
              <Tooltip title='Eliminar Usuario' arrow>
                  <i
                  onClick={() => setOpenDialog(true)}
                  className='fas fa-trash text-red-700 hover:text-red-500'
                  />
              </Tooltip>
          </>
          )}
          </div>
        <Dialog open={openDialog}>
          <div className='p-8 flex flex-col'>
              <h1 className='text-gray-900 text-2xl font-bold'>
              ¿Está seguro de querer eliminar el usuario?
              </h1>
              <div className='flex w-full items-center justify-center my-4'>
              <button
                  onClick={() => eliminarUsuario()}
                  className='mx-2 px-4 py-2 bg-green-500 text-white hover:bg-green-700 rounded-md shadow-md'
              >
                  Sí
              </button>
              <button
                  onClick={() => setOpenDialog(false)}
                  className='mx-2 px-4 py-2 bg-red-500 text-white hover:bg-red-700 rounded-md shadow-md'
              >
                  No
              </button>
              </div>
          </div>
        </Dialog>
      </td>
    </tr>
  )



}

const TablaUsuarios = ({listaUsuarios, setEjecutarConsulta}) =>{
  const [buscar, setBuscar] = useState('');
  const [usuariosFiltrados, setUsuariosFiltrados] = useState(listaUsuarios);

  useEffect(() => {
    setUsuariosFiltrados(
      listaUsuarios.filter((elemento) => {
        return JSON.stringify(elemento).toLowerCase().includes(buscar.toLowerCase());
      })
    );
  }, [buscar, listaUsuarios]);


return(
    <>
      <div className='flex items-center justify-center w-full h-1/6'>
        <h2 className='text-4xl font-extrabold text-gray-900'>
        Gestión de Usuarios
        </h2>
      </div>
      <div className='flex items-center justify-center w-full h-auto'>
        <input 
        type="text"
        value = {buscar}
        placeholder='Buscar'
        className='border-2 border-novablue mx-2 px-3 py-1 rounded-md focus:outline-none focus:border-gray-500'
        onChange={(e) => {setBuscar(e.target.value)}}
        />
      </div>
      <div className='hidden md:flex w-full mt-12'>
        <table className="tabla">
            <thead>
                <tr>
                    <th className="text-center">Nombre</th>
                    <th className="text-center">Correo</th>
                    <th className="text-center w-1/10">Rol</th>
                    <th className="text-center w-1/10" >Estado</th>
                    <th className="text-center">Acciones</th>
                </tr>
            </thead>
            <tbody>
                {usuariosFiltrados.map((usuario) => {
                    return(
                        <FilaUsuario
                        key={nanoid()}
                        usuario={usuario}
                        setEjecutarConsulta={setEjecutarConsulta}
                        />
                    )
                })}
            </tbody>
        </table>
      </div>
    </>
  )
}
export default Usuarios;

