import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { Dialog, Tooltip } from '@material-ui/core';
import { nanoid } from 'nanoid';
import axios from 'axios'
import { useState, useEffect,useRef } from 'react'
import 'react-toastify/dist/ReactToastify.css';
import {obtenerProductos} from 'utils/api'

const GestionProducto = () => {
    const [mostrarTabla, setMostrarTabla] = useState(true);
    const [productos, setProductos] = useState([]);
    const [textoBoton,setTextoBoton]=useState('Registrar producto');
    const [ejecutarConsulta, setEjecutarConsulta] = useState(true);
    //Renderizacion condicional
    useEffect(() => {
        if (mostrarTabla) {
          setTextoBoton('Registrar Producto');
         
        } else {
          setTextoBoton('Ver productos');
         
        }
      }, [mostrarTabla]);

    useEffect(() => {
        console.log('consulta', ejecutarConsulta);
        if (ejecutarConsulta) {
            obtenerProductos(setProductos, setEjecutarConsulta);
          }
    }, [ejecutarConsulta]);

    useEffect(() => {
        if (mostrarTabla) {
            obtenerProductos();
        }
      }, [mostrarTabla]);

    return (
        <div className="w-full h-full">

             {/*Botón Para regresar*/}
             <div className='flex justify-end mx-2'>
                <button
                onClick={()=>{
                    setMostrarTabla(!mostrarTabla);
                }}
                className=' py-2 px-3 justify-end border border-transparent text-sm font-medium rounded-md text-white bg-novablue hover:bg-gray-300 hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 mx-10 my-4'
                >{textoBoton}
                <div className='flex items-center justify-start'>
                    <span className='mx-4'></span>
                </div>
                </button>
            </div>
            {/* Renderización condicional*/}
            {mostrarTabla ? (
                <TablaProductos listaProductos={productos} setEjecutarConsulta = {setEjecutarConsulta} />
            ) : (
                <RegistroProductos 
                setMostrarTabla = {setMostrarTabla}
                listaProductos = {productos}
                setProductos = {setProductos}
                />
            )}

           
        </div>
    )
}


const TablaProductos = ({listaProductos, setEjecutarConsulta,  setMostrarTabla}) =>{
    const [busqueda, setBusqueda] = useState('');
    const [productosFiltrados, setProductosFiltrados] = useState(listaProductos);

    useEffect(() => {
        setProductosFiltrados(
          listaProductos.filter((elemento) => {
            return JSON.stringify(elemento).toLowerCase().includes(busqueda.toLowerCase());
          })
        );
      }, [busqueda, listaProductos]);


    return(
        <>
            <div className='flex items-center justify-center w-full h-1/6'>
                <h2 className='text-3xl font-extrabold text-gray-900'>
                    Gestión de Productos
                </h2>
            </div>
            <div className='flex items-center justify-center w-full h-auto'>
                <input
                value = {busqueda}
                onChange = {(e)=> setBusqueda(e.target.value)}
                placeholder='Buscar'
                className='border-2 border-novablue mx-2 px-3 py-1 rounded-md focus:outline-none focus:border-gray-500'
                />
                {/* <input
                placeholder='Búsqueda por ID'
                className='border-2 border-novablue mx-2 px-3 py-1 rounded-md focus:outline-none focus:border-gray-500'
                /> */}
            </div>
            <div className='hidden md:flex w-full mt-12'>
                <table class="tabla">
                    <thead>
                        <tr>
                            <th className="text-center">ID Producto</th>
                            <th className="text-center">Descripción</th>
                            <th className="text-center w-1/10">Valor Unitario</th>
                            <th className="text-center w-1/10" >Estado</th>
                            <th className="text-center">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {productosFiltrados.map((producto) => {
                            return(
                                <FilaProducto
                                key={nanoid()}
                                producto={producto}
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

 const FilaProducto = ({producto, setEjecutarConsulta}) => {
        const [edit,setEdit] = useState(false);
        const [openDialog,setOpenDialog] = useState(false);
        const [infoNuevoProducto, setInfoNuevoProducto] = useState({
            _id : producto._id,
            descripcion : producto.descripcion,
            valorU : producto.valorU,
            estadoP : producto.estadoP,
        });

        const actualizarProducto = async () => {
        //enviar la info al backend
        const options = {
          method: 'PATCH',
          url: `http://localhost:5000/productos/${producto._id}/`,
          headers: { 'Content-Type': 'application/json' },
          data: { ...infoNuevoProducto },
        };
    
        await axios
          .request(options)
          .then(function (response) {
            console.log(response.data);
            toast.success('Producto modificado con éxito');
            setEdit(false);
            setEjecutarConsulta(true);
          })
          .catch(function (error) {
            toast.error('Error modificando el producto');
            console.error(error);
          });
      };

        const eliminarProducto = async () => {
        const options = {
            method: 'DELETE',
            url: 'http://localhost:5000/productos/eliminar/',
            headers: { 'Content-Type': 'application/json' },
            data: { id: producto._id },
        };

        await axios
            .request(options)
            .then(function (response) {
            console.log(response.data);
            toast.success('Producto eliminado con éxito');
            setEjecutarConsulta(true);
            })
            .catch(function (error) {
            console.error(error);
            toast.error('Error eliminando el producto');
            });
        setOpenDialog(false);
        }; 
    

    return(
        <tr>
            {edit ? (
                <>
                    <td>{infoNuevoProducto._id}</td>
                    <td>
                        <input 
                            className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-2'
                            type='text'
                            value={infoNuevoProducto.descripcion}
                            onChange={(e) => setInfoNuevoProducto({ ...infoNuevoProducto, descripcion: e.target.value })}
                        />
                    </td>
                    <td>
                    <input 
                        className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-2'
                        type='number'
                        value={infoNuevoProducto.valorU}
                        onChange={(e) => setInfoNuevoProducto({ ...infoNuevoProducto, valorU: e.target.value })}
                        />
                    </td>
                    <td>
                    <input 
                        className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-2'
                        type='text'
                        value={infoNuevoProducto.estadoP}
                        onChange={(e) => setInfoNuevoProducto({ ...infoNuevoProducto, estadoP: e.target.value })}
                    />
                    </td>
                </>
            ) : (
                <>
                    <td>{producto.idProducto}</td>
                    <td>{producto.descripcion}</td>
                    <td>{producto.valorU}</td>
                    <td>{producto.estadoP}</td>
                </>
            )}
            <td>
                <div className='flex w-full justify-around'>
                {edit ? (
                    <>
                    <Tooltip title='Confirmar Edición' arrow>
                        <i
                        onClick={() => actualizarProducto()}
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
                    <Tooltip title='Editar Producto' arrow>
                        <i
                        onClick={() => setEdit(!edit)}
                        className='fas fa-pencil-alt text-yellow-700 hover:text-yellow-500'
                        />
                    </Tooltip>
                    <Tooltip title='Eliminar Producto' arrow>
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
                    ¿Está seguro de querer eliminar el producto?
                    </h1>
                    <div className='flex w-full items-center justify-center my-4'>
                    <button
                        onClick={() => eliminarProducto()}
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
};

const RegistroProductos = ({setMostrarTabla, Productos, setProductos}) => {
    return(
      <div className='h-4/5 w-full'>
        {/* TITULO */}
        <div className='flex items-center justify-center w-full h-1/9'>
            <h2 className='text-3xl font-extrabold text-gray-900'>
            Registro de Productos
            </h2>
        </div>

        {/* FORMULARIO DE REGISTRO DE PRODUCTO */}
        <div className="w-full h-1/2 flex flex-wrap justify-center items-center px-3">
          <FormularioCreacionProductos 
          setMostrarTabla= {setMostrarTabla}
          setProductos = {setProductos}/>
        </div>
    </div>        
    )
}

const FormularioCreacionProductos = ({setMostrarTabla, listaProductos, setProductos }) => {
    const form = useRef(null)

    const submitForm = async (e) => {
        e.preventDefault();
        const fd = new FormData(form.current);

        const nuevoProducto = {};
        fd.forEach((value,key) => {
            nuevoProducto[key] = value;
        });
        console.log('datos del form enviados', nuevoProducto)

        const options = {
            method : 'POST',
            url : 'http://localhost:5000/productos/',
            headers: { 'Content-Type': 'application/json' },
            data: { idProducto: nuevoProducto.idProducto, descripcion: nuevoProducto.descripcion, valorU: nuevoProducto.valorU, estadoP : nuevoProducto.estadoP  },
    
        };
    
        await axios
          .request(options)
          .then(function (response) {
            console.log(response.data);
            toast.success('Producto agregado con éxito');
          })
          .catch(function (error) {
            console.error(error);
            toast.error('Error creando un producto');
          });
          setMostrarTabla(true);
    };

    return(
        <>
            <form ref={form} onSubmit={submitForm}> 
                
                    <label htmlFor='idProducto'>Identificador de producto</label>
                    <input
                          name='idProducto'
                          type='number'
                          required
                          className='appearance-none rounded-md relative w-full mb-2 px-3 py-2 border border-novablue placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
                          placeholder='ID Producto'
                        />
                    <label  htmlFor='descripcion' classsName="mx-2">Descripción</label>
                    <textarea
                        name='descripcion'
                        type='text'
                        autoComplete='text'
                        required
                        className='appearance-none rounded-md relative block w-full mb-2 px-3 py-2 border border-novablue placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
                        placeholder='Descripción'
                      />
                    <label classsName="mx-2" htmlFor='valorU'>$ Valor Unitario</label>
                    <input
                        name='valorU'
                        type='number'
                        autoComplete='number'
                        required
                        className='appearance-none rounded-md relative block w-full mb-2 px-3 py-2 border border-novablue placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
                        placeholder='Valor unitario'
                    />
                    <label classsName="mx-2" htmlFor='estadoP'>Estado del producto</label>
                    <select 
                        name='estadoP'
                        required
                        className='rounded-md relative block w-full mb-2 px-3 py-2 border border-novablue placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
                    >
                        <option  disabled selected>Estado del producto</option>
                        <option value="Disponible">Disponible</option>
                        <option value="No disponible">No disponible</option>
                    </select>
                    <button
                        type='submit'
                        className='group relative w-auto flex py-2 px-2 border border-transparent text-sm font-medium rounded-md text-white bg-novablue hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500'
                    >
                        <div className='flex items-center'>
                            <i className="fas fa-plus"></i>
                            Registrar
                        </div>
                    </button>
            </form>
        </>
    )
}

export default GestionProducto
