import React from 'react'
import { nanoid } from 'nanoid';
import { ToastContainer, toast } from 'react-toastify';
import { Dialog, Tooltip } from '@material-ui/core';
import { useState, useEffect} from 'react'
import 'react-toastify/dist/ReactToastify.css';
import { obtenerUsuarios } from 'utils/api';

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
    const [obtenerVenta, setObtenerVenta] = useState([]);
    const [vendedores, setVendedores] = useState([]);
    const [mostrarTabla, setMostrarTabla] = useState(false);
    const [textoBoton, setTextoBoton] = useState('Crear Nuevo Vehículo');
    const [colorBoton, setColorBoton] = useState('indigo');
    const [ejecutarConsulta, setEjecutarConsulta] = useState(true);

    useEffect(() => {
        setObtenerVenta(VentaBackend)
    }, []);

    useEffect(() => {
        const fetchVendedores = async () =>{
            await obtenerUsuarios(
                (response) => {
                    setVendedores(response.data);
                },
                (error) => {
                    console.error(error);
                }
            )
        }
        fetchVendedores();
    }, []);

    return(
        <div className='flex h-full w-full flex-col'>
            <div className='flex justify-end items-start'>
                <button
                    onClick={() => {
                        setMostrarTabla(!mostrarTabla);
                    }}
                    className={'h-auto py-2 px-3 border border-transparent text-sm font-medium rounded-md text-white bg-novablue hover:bg-gray-300 hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 mx-10 my-4'}
                    >
                    {textoBoton}
                </button>
            </div>
            <div className='flex items-center w-full h-auto justify-center mb-4'>
                <h2 className='text-4xl text-center font-extrabold text-gray-900'>
                    REGISTRO DE VENTAS
                </h2>
            </div>
            {mostrarTabla ? (
                <GestionVentas listaVentas = {obtenerVenta} setEjecutarConsulta={setEjecutarConsulta} />
                ) : (
                <Ventas />
            )}
            <ToastContainer position='bottom-center' autoClose={5000} />
        </div>
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

const Ventas = () => {

    const [articulosVenta, setArticulosVenta] = useState([]);

    const articulosVentaBackend = [
        {
            idProducto : 10013,
            descripcion : "Adidas Stan Smith",
            cantidad : 15,
            valorUnitario : 229900,
            subtotal : 4498500
        },
        {
            idProducto : 10013,
            descripcion : "Adidas Stan Smith",
            cantidad : 15,
            valorUnitario : 229900,
            subtotal : 4498500
        },
        {
            idProducto : 10013,
            descripcion : "Adidas Stan Smith",
            cantidad : 15,
            valorUnitario : 229900,
            subtotal : 4498500
        },
    ]

    useEffect( () => {
        // Obtener lista de articulos
        setArticulosVenta(articulosVentaBackend);
    }, []);

    return (
        <div className='h-full w-auto'>
            {/* FORMULARIO DE VENTA */}
            <form>
                <div className = "flex justify-around" >
                    <div>
                        <label className="mx-3 block uppercase tracking-wide text-gray-700 font-bold mb-2" htmlFor='id-venta'>ID Venta</label>
                        <input
                        name = 'id-venta'
                        placeholder='ID Venta'
                        type="text"
                        className='border-2 border-novablue mx-2 px-3 py-1 self-start rounded-md focus:outline-none focus:border-gray-500'
                        />
                    </div>
                    <div>
                        <label className="mx-3 block uppercase tracking-wide text-gray-700 font-bold mb-2" htmlFor = 'fecha-venta'>Fecha Venta</label>
                        <input
                        name = 'fecha-venta' 
                        type="date"
                        className='border-2 border-novablue mx-2 px-3 py-1 self-start rounded-md focus:outline-none focus:border-gray-500'
                        />
                    </div>
                    <div>
                        <label className="mx-3 block uppercase tracking-wide text-gray-700 font-bold mb-2" htmlFor='cliente'>Cliente</label>
                        <input
                        name = 'cliente'
                        type="text"
                        placeholder='Cliente'
                        className='border-2 border-novablue mx-2 px-3 py-1 self-start rounded-md focus:outline-none focus:border-gray-500'
                        />
                    </div>	
                    <div>
                        <label className="mx-3 block uppercase tracking-wide text-gray-700 font-bold mb-2" htmlFor='id-cliente'>ID Cliente</label>
                        <input
                        name = 'id-cliente'
                        type="number"
                        placeholder='ID Cliente'
                        className='border-2 border-novablue mx-2 px-3 py-1 self-start rounded-md focus:outline-none focus:border-gray-500'
                        />
                    </div>
                    <div>
                        <label className="mx-3 block uppercase tracking-wide text-gray-700 font-bold mb-2" htmkFor='vendedor'>Vendedor</label>
                        <select 
                        name='estadoP'
                        required
                        className='rounded-md relative block w-full mb-2 px-3 py-2 border border-novablue placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'>
                            <option  disabled selected>Estado del producto</option>
                            <option value="Disponible">Disponible</option>
                            <option value="No disponible">No disponible</option>
                        </select>
                    </div>
                </div>
            </form>

            {/* FORMULARIO PARA AGREGAR PRODUCTO */}
            <FormularioAgregarArticulo listaArticulos={articulosVenta} fcnAgregarArticulo={setArticulosVenta}/>
            
            {/* TABLA PARA VISUALIZAR PRODUCTOS AGREGADOS */}
            <TablaArticulos listaArticulos={articulosVenta}/>
            
            {/* PIE DE VENTA */}
            <div className="w-full  h-auto">
                <div className="w-full justify-end flex flex-wrap">
                    <div>
                        <span className="mx-8 px-4 font-extrabold uppercase text-xl">VALOR TOTAL</span>
                    </div>
                    <div>
                        <span className="mx-8 px-4 text-lg">$ 3456998231</span>
                    </div>
                </div>

                <div className='flex justify-end mx-4'>
                    <button
                    className='py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-novablue hover:bg-gray-300 hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500'
                    >
                    <span className='mx-4'>Confimar</span>
                    </button>
                </div>
            </div>
            <ToastContainer position="bottom-center" autoClose={1500} />
        </div>
    );
};

const TablaArticulos = ({listaArticulos}) => {
    useEffect(() => {
        console.log('Este es el listado de los articulos para vender en el componente de tabla', listaArticulos)
    }, [listaArticulos])
    return(
        <div className="w-full h-2/5 overflow-y-scroll overflow-x-hidden">
            <table className="tabla mt-4 mr-4">
                <thead>
                    <tr>
                        <th className="text-center">ID Producto</th>
                        <th className="text-center">Descripción</th>
                        <th className="text-center">Cantidad</th>
                        <th className="text-center">Valor Unitario</th>
                        <th className="text-center">Subtotal</th>
                        <th className="text-center">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {listaArticulos.map((articulo) =>{
                        return(
                            <tr>
                                <td className='text-center'>{articulo.idProducto}</td>
                                <td className='text-center'>{articulo.descripcion}</td>
                                <td className='text-center'>{articulo.cantidad}</td>
                                <td className='text-center'>{articulo.valorUnitario}</td>
                                <td className='text-center'>{articulo.cantidad * articulo.valorUnitario}</td>
                                <td className='text-center'>
                                    <div className='flex justify-around'>
                                        <div className='hover:bg-yellow-500'><i className='fas fa-edit'></i></div>
                                        <div className='hover:bg-red-500'><i className='fas fa-trash'></i></div>
                                    </div>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    );
};

const FormularioAgregarArticulo = ({fcnAgregarArticulo, listaArticulos}) => {
    const [idProducto, setIdProducto] = useState();
    const [descripcion, setDescripcion] = useState();
    const [cantidad, setCantidad] = useState();
    const [valorUnitario, setValorUnitario] = useState();

    const agregarArticulo = ()=> {
        console.log('id',idProducto,'descripcion',descripcion,'cantidad',cantidad,'valor unitario', valorUnitario);
        toast.success('Mensaje');
        fcnAgregarArticulo([...listaArticulos, {idProducto:idProducto, descripcion:descripcion,  cantidad: cantidad, valorUnitario: valorUnitario} ])
        setIdProducto('')
        setDescripcion('')
        setCantidad('')
        setValorUnitario('')
    }
    return (
        <div className="h-auto w-full my-2">
            <h3 className="text-2xl font-extrabold text-gray-900 text-center">Agregar Producto</h3>
            <div className="flex flex-wrap items-end justify-center">
                <div className="flex flex-wrap justify-center">
                    <div>	
                        <label className="mx-3 block uppercase tracking-wide text-gray-700 font-bold mb-2">ID Producto</label>
                        <input 
                        type="text"
                        placeholder='ID Producto'
                        value={idProducto}
                        onChange={(e)=>{setIdProducto(e.target.value)}}
                        className='border-2 border-novablue mx-2 px-3 py-1 rounded-md focus:outline-none focus:border-gray-500'
                        />
                    </div>
                    <div>	
                        <label className="mx-3 block uppercase tracking-wide text-gray-700 font-bold mb-2">Descripción</label>
                        <input
                        type="text"
                        placeholder='Nombre del artículo'
                        value={descripcion}
                        onChange={(e)=>{setDescripcion(e.target.value)}}
                        className='border-2 border-novablue mx-2 px-3 py-1 rounded-md focus:outline-none focus:border-gray-500'
                        />
                    </div>
                    <div>	
                        <label className="mx-3 block uppercase tracking-wide text-gray-700 font-bold mb-2">Cantidad</label>
                        <input
                        type="number"
                        placeholder='Cantidad'
                        value={cantidad}
                        onChange={(e)=>{setCantidad(e.target.value)}}
                        className='border-2 border-novablue mx-2 px-3 py-1 rounded-md focus:outline-none focus:border-gray-500'
                        />
                    </div>
                    {/* <div>	
                        <label className="mx-3 block uppercase tracking-wide text-gray-700 font-bold mb-2">Valor Unitario</label>
                        <input
                        type="number"
                        placeholder='Valor unitario'
                        value={valorUnitario}
                        onChange={(e)=>{setValorUnitario(e.target.value)}}
                        className='border-2 border-novablue mx-2 px-3 py-1 rounded-md focus:outline-none focus:border-gray-500'
                        />
                    </div> */}
                </div>
                <div>
                    <button
                    type='submit'
                    className='group relative w-auto flex py-2 px-2 border border-transparent text-sm font-medium rounded-md text-white bg-novablue hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500'
                    onClick={()=>{agregarArticulo()}}
                    >
                    <div className='flex items-center justify-start'>
                        <i className="fas fa-plus"></i>
                        <span className='mx-2'>Agregar</span>
                    </div>
                    </button>
                </div>
            </div>   
        </div>
    )
}

export default BuscarActualizarVentas