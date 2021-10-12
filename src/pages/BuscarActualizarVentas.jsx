import React from 'react'
import { nanoid } from 'nanoid';
import { ToastContainer, toast } from 'react-toastify';
import { Dialog, Tooltip } from '@material-ui/core';
import { useState, useEffect} from 'react'
import 'react-toastify/dist/ReactToastify.css';

const VentaBackend = [
    {
        idVenta:9898,
        descripcionVenta:"zapatos,tennis,chanclas",
        fechaVenta:"25/1/2003",
        idCliente:65165184,
        nombreCliente: "juan Perez Toro",
        idVendedor:651954194,
        nombreVendedor:"Jose tobar taberas",
        valorVenta:6545116541,
        alerta:"bg-warning",
        estado:"En proceso"
    },
    {
        idVenta:4545,
        descripcionVenta:"tennis, zapatillas, tacones",
        fechaVenta:"44/5/2001",
        idCliente:65165184,
        nombreCliente: "juan Perez Toro",
        idVendedor:651954194,
        nombreVendedor:"Jose tobar taberas",
        valorVenta:6545116541,
        alerta:"bg-success",
        estado:"Entregado"
    },
    {
        idVenta:7878,
        descripcionVenta:"zapatos,tennis,chanclas",
        fechaVenta:"25/1/2003",
        idCliente:65165184,
        nombreCliente: "juan Perez Toro",
        idVendedor:651954194,
        nombreVendedor:"Jose tobar taberas",
        valorVenta:6545116541,
        alerta:"bg-warning",
        estado:"En proceso"
    },
    {
        idVenta:3232,
        descripcionVenta:"zapatos,tennis,chanclas",
        fechaVenta:"25/1/2003",
        idCliente:65165184,
        nombreCliente: "Maria euclide tartago",
        idVendedor:651954194,
        nombreVendedor:"Jose maria maria",
        valorVenta:6545116541,
        alerta:"bg-danger",
        estado:"Cancelado"
    }
]

const BuscarActualizarVentas = () => {
    const [venta, setVenta] = useState([]);
    const [mostrarTabla, setMostrarTabla] = useState(false);

    useEffect(() => {
        setVenta(VentaBackend)
    }, []);

    return(
        <GestionVentas listaVentas={venta} />
    );
}

const GestionVentas = ({listaVentas}) => {
    const [busqueda, setBusqueda] = useState('');
    const [ventasFiltradas, setVentasFiltradas] = useState(listaVentas);

    useEffect(() => {
        setVentasFiltradas(
          listaVentas.filter((elemento) => {
            return JSON.stringify(elemento).toLowerCase().includes(busqueda.toLowerCase());
          })
        );
      }, [busqueda, listaVentas]);

    return (
        <div className="h-full w-full">

            {/*Título*/}
            <div className='flex items-center justify-center w-full h-1/6'>
                <h2 className='text-4xl font-extrabold text-gray-900'>
                Estado de Venta
                </h2>
            </div>

            <div className='flex items-center justify-center w-full h-auto'>
                <input
                value = {busqueda}
                onChange = {(e)=> setBusqueda(e.target.value)}
                placeholder='Buscar'
                className='border-2 border-novablue mx-2 px-3 py-1 rounded-md focus:outline-none focus:border-gray-500'
                />
            </div>

            {/*Contenedor de la tabla de Buscar y actualizar venta*/}
            <div className="overflow-y-auto overflow-x-auto">
                <table className="tabla table-auto">
                    <thead>
                        <tr>
                            <th className="w-1/12">ID Venta</th>
                            <th className="w-1/12">Descripción de venta</th>
                            <th>Fecha de venta</th>
                            <th>ID Cliente</th>
                            <th>Nombre del cliente</th>
                            <th>ID Vendedor</th>
                            <th>Nombre del vendedor</th>                                
                            <th>Valor Venta</th> 
                            <th className='w-1/12'>Estado</th>
                            <th className='w-1/12'>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {ventasFiltradas.map((venta) => {
                            return(
                                <FilaVentas 
                                key = {nanoid()}
                                venta = {venta} />
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

const FilaVentas = ({venta}) =>{
    const [edit,setEdit] = useState(false);
    const [openDialog,setOpenDialog] = useState(false);
    const [alerta, setAlerta] = useState('')
    const [infoNuevaVenta, setInfoNuevaVenta] = useState({
        idVenta: venta.idVenta,
        descripcionVenta: venta.descripcionVenta,
        fechaVenta: venta.fechaVenta,
        idCliente: venta.idCliente,
        nombreCliente: venta.nombreCliente,
        idVendedor: venta.idVendedor,
        nombreVendedor: venta.nombreVendedor,
        valorVenta: venta.valorVenta,
        estado: venta.estado
    });

    useEffect(() => {
        if(infoNuevaVenta.estado === "Entregado"){
            setAlerta('success')
        }else if (infoNuevaVenta.estado === "En proceso") {
            setAlerta('warning')
        }else{
            setAlerta('danger')
        }
    }, [alerta, infoNuevaVenta.estado]);
    
    return(
        <tr>
            {edit ? (
                <>
                    <td className='text-center'>{infoNuevaVenta.idVenta}</td>
                    <td className='text-center'>
                        <input 
                            className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-2'
                            type='text'
                            value={infoNuevaVenta.descripcion}
                            onChange={(e) => setInfoNuevaVenta({ ...infoNuevaVenta, descripcion: e.target.value })}
                        />
                    </td>
                    <td className='text-center'>{infoNuevaVenta.fechaVenta}</td>
                    <td className='text-center'>{infoNuevaVenta.idCliente}</td>
                    <td className='text-center'>{infoNuevaVenta.nombreCliente}</td>
                    <td className='text-center'>{infoNuevaVenta.idVendedor}</td>
                    <td className='text-center'>{infoNuevaVenta.nombreVendedor}</td>
                    <td className='text-center'>
                        <input 
                            className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-2'
                            type='text'
                            value={infoNuevaVenta.valorVenta}
                            onChange={(e) => setInfoNuevaVenta({ ...infoNuevaVenta, valorVenta: e.target.value })}
                        />
                    </td>
                    <td className='text-center'>
                        <select 
                            className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-2'
                            type='select'
                            value={infoNuevaVenta.estado}
                            onChange={(e) => setInfoNuevaVenta({ ...infoNuevaVenta, estado: e.target.value })}
                            defaultValue='0'>

                            <option disabled value="0">Seleccionar una opción</option>
                            <option value="Entregado">Entregado</option>
                            <option value="En proceso">En proceso</option>
                            <option value="Cancelado">Cancelado</option>
                        </select>
                    </td>
                </>
            ):(
            <>
                <td>{venta.idVenta}</td>
                <td className="text-center">
                    <i className="rounded bg-novablue border-solid border-2 border-novablue far fa-eye"></i>
                </td>
                <td>{venta.fechaVenta}</td>
                <td>{venta.idCliente}</td>
                <td>{venta.nombreCliente}</td>
                <td>{venta.idVendedor}</td>
                <td>{venta.nombreVendedor}</td>
                <td>{venta.valorVenta}</td>
                <td className={`bg-${alerta}`}>{venta.estado}</td>
            </>
            )}

            {edit ? (
                <>
                    <div className= "flex justify-around mt-2">
                        <Tooltip title='Confirmar Edición' arrow>
                            <i
                            /* onClick= llama a la petición de editar */
                            className='fas fa-check text-green-700 hover:text-green-500'
                            />
                        </Tooltip>
                        <Tooltip title='Cancelar edición' arrow>
                            <i
                            onClick={() => setEdit(!edit)}
                            className='fas fa-ban text-yellow-700 hover:text-yellow-500'
                            />
                        </Tooltip>
                    </div>
                </>
            ):(
                <>
                    <div className = "flex justify-around mt-2">
                        <Tooltip title='Editar Producto' arrow>
                            <button
                            onClick={() => setEdit(!edit)} 
                            className="rounded border-solid border-2 border-novablue far fa-edit bg-info">
                            </button>
                        </Tooltip>
                        <Tooltip title='Eliminar Producto' arrow>
                            <button 
                            onClick={() => setOpenDialog(true)}
                            className="rounded border-solid border-2 border-red-600 far fa-trash-alt bg-danger">
                            </button>
                        </Tooltip>
                    </div>
                </>
            )}
            <Dialog open={openDialog}>
                <div className='p-8 flex flex-col'>
                    <h1 className='text-gray-900 text-2xl font-bold'>
                    ¿Está seguro de querer eliminar el producto?
                    </h1>
                    <div className='flex w-full items-center justify-center my-4'>
                        <button
                        /* onClick={() => eliminarProducto()} */
                        className='mx-2 px-4 py-2 bg-green-500 text-white hover:bg-green-700 rounded-md shadow-md'>
                            Sí
                        </button>

                        <button
                        onClick={() => setOpenDialog(false)}
                        className='mx-2 px-4 py-2 bg-red-500 text-white hover:bg-red-700 rounded-md shadow-md'>
                            No
                        </button>
                    </div>
                </div>
            </Dialog>
        </tr>
    )  
}

export default BuscarActualizarVentas
