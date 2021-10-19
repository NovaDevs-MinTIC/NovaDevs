import React from 'react'
import { nanoid } from 'nanoid';
import { ToastContainer, toast } from 'react-toastify';
import { Dialog, Tooltip } from '@material-ui/core';
import { useState, useEffect, useRef } from 'react'
import 'react-toastify/dist/ReactToastify.css';
import { obtenerUsuarios, obtenerProductos } from 'utils/api';
import { crearVenta } from 'utils/api';

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
        estado:"Entregado"
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
        estado:"Cancelado"
    }
]

const BuscarActualizarVentas = () => {
    const [ventas, setVentas] = useState([]);
    const [mostrarTabla, setMostrarTabla] = useState(false);
    const [textoBoton, setTextoBoton] = useState('Crear Nuevo Vehículo');
    const [titulo, setTitulo] = useState('Ventas');
    const [ejecutarConsulta, setEjecutarConsulta] = useState(true);

    
    useEffect(() => {
        if (mostrarTabla) {
            setTextoBoton('Registrar nueva venta');
            setTitulo('Ventas')
            
        } else {
            setTextoBoton('Ver ventas');
            setTitulo('Registro de Ventas')
        }
    }, [mostrarTabla]);
    
    useEffect(() => {
        setVentas(VentaBackend)
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
                    {titulo}
                </h2>
            </div>

            {mostrarTabla ? (
                <GestionVentas listaVentas = {ventas} setEjecutarConsulta={setEjecutarConsulta} />
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
    const form = useRef(null);
    const [vendedores, setVendedores] = useState([]);
    const [productos, setProductos] = useState([]);
    const [productosTabla, setProductosTabla] = useState([]);
    
    useEffect(() => {
        const fetchVendedores = async () =>{
            await obtenerUsuarios(
                (response) => {
                    console.log('respuesta a GET usuarios: ', response);
                    setVendedores(response.data);
                },
                (error) => {
                    console.error(error);
                }
            )
        }
        const fetchProductos = async () =>{
            await obtenerProductos(
                (response) => {
                    console.log('respuesta a GET productos: ', response);
                    setProductos(response.data);
                },
                (error) => {
                    console.error(error);
                }
            )
        }
        fetchVendedores();
        fetchProductos();
    }, []);
    
    /* const ShowSelected = () =>{
        let dato = document.getElementById('vendedorLista').value;
        console.log(dato);
    } */

    const submitForm = async (e) => {
        e.preventDefault();
        const fd = new FormData(form.current);

        const formData = {};
        fd.forEach((value,key)=>{
            formData[key] = value;
        })

        console.log('formData: ', formData); 

        Object.keys(formData).forEach(
            (k)=>{
                if (k.includes('cantidad')){
                    const Indice = parseInt(k.split('_')[1]);
                    productosTabla[Indice]['cantidad'] = formData[k];
                }
            }
        )

        console.log("vendedor",formData.vendedor)

        const DataVenta = {
            idVenta: formData.idVenta,
            fechaVenta: formData.fechaVenta,
            cliente: formData.cliente,
            idCliente: formData.idCliente,
            vendedor: formData.vendedor,
            productos: productosTabla,
        }
    
        console.log(DataVenta)

        /* await crearVenta(
            DataVenta,
            (response) => {
                console.log(response);
                toast.success('Venta agregada con éxito');
            },
            (error) => {
                console.error(error);
                toast.error('Error creando una venta');
            }
        ); */
    };

    return (
        <div className='h-full w-auto'>
            <form ref={form} onSubmit={submitForm}>
                    <div className = "flex justify-around" >
                        <div>
                            <label className="mx-3 block uppercase tracking-wide text-gray-700 font-bold mb-2" htmlFor='idVenta'>ID Venta</label>
                            <input
                            name = 'idVenta'
                            placeholder='ID Venta'
                            type="text"
                            className='border-2 border-novablue mx-2 px-3 py-1 self-start rounded-md focus:outline-none focus:border-gray-500'
                            required
                            />
                        </div>
                        <div>
                            <label className="mx-3 block uppercase tracking-wide text-gray-700 font-bold mb-2" htmlFor = 'fecha-venta'>Fecha Venta</label>
                            <input
                            name = 'fechaVenta' 
                            type="date"
                            className='border-2 border-novablue mx-2 px-3 py-1 self-start rounded-md focus:outline-none focus:border-gray-500'
                            required
                            />
                        </div>
                        <div>
                            <label className="mx-3 block uppercase tracking-wide text-gray-700 font-bold mb-2" htmlFor='cliente'>Cliente</label>
                            <input
                            name = 'cliente'
                            type="text"
                            placeholder='Cliente'
                            className='border-2 border-novablue mx-2 px-3 py-1 self-start rounded-md focus:outline-none focus:border-gray-500'
                            required
                            />
                        </div>	
                        <div>
                            <label className="mx-3 block uppercase tracking-wide text-gray-700 font-bold mb-2" htmlFor='id-cliente'>ID Cliente</label>
                            <input
                            name = 'idCliente'
                            type="number"
                            placeholder='ID Cliente'
                            className='border-2 border-novablue mx-2 px-3 py-1 self-start rounded-md focus:outline-none focus:border-gray-500'
                            required
                            />
                        </div>
                        <div>
                            <label 
                            className="mx-3 block uppercase tracking-wide text-gray-700 font-bold mb-2" 
                            htmlFor='vendedor'>Vendedor
                                <select 
                                name='vendedor'
                                defaultValue=''
                                required
                                className='border-2 border-novablue mx-2 px-3 py-2 self-start rounded-md focus:outline-none focus:border-gray-500'>
                                    <option  disabled selected value=''>Seleccione un vendedor</option>
                                    {vendedores.map((el)=>{
                                        return(
                                            <option key={nanoid()} value={el._id} >{`${el.nombre} ${el.correo}`}</option>
                                        )
                                    })}
                                </select>
                            </label>
                        </div>
                    </div>
                <TablaArticulos 
                productos={productos}
                setProductos={setProductos}
                setProductosTabla={setProductosTabla}/>
                
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
                        type='submit'
                        className='py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-novablue hover:bg-gray-300 hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500'
                        >
                        <span className='mx-4'>Confimar</span>
                        </button>
                    </div>
                </div>
                <ToastContainer position="bottom-center" autoClose={900} />
            </form>
        </div>
    );
};

const TablaArticulos = ({productos, setProductos, setProductosTabla}) => {
    const [productoAAgregar, setProductoAAgregar] = useState({});
    const [filasTabla, setFilasTabla] = useState([]);
    
    useEffect(() => {
        /* console.log('filasTabla', filasTabla); */
        setProductosTabla(filasTabla);
    }, [filasTabla, setProductosTabla]);

    const agregarNuevoProducto = () => {
        setFilasTabla([...filasTabla, productoAAgregar]);
        setProductos(productos.filter((v) => v._id !== productoAAgregar._id));
        setProductoAAgregar({});
    };

    const eliminarProducto = (productoAEliminar) => {
        setFilasTabla(filasTabla.filter((v) => v._id !== productoAEliminar._id));
        setProductos([...productos, productoAEliminar]);
    };

    const modificarProducto = (producto, cantidad) => {
        setFilasTabla(
            filasTabla.map((ft)=>{
                if (ft._id === producto.idProducto){
                    ft.cantidad = cantidad;
                    ft.total = producto.valorU * cantidad;
                }
                return ft;
            })
        )
      };

    return(
        <div className="w-full h-2/5 overflow-y-scroll overflow-x-hidden">
            {/* FORMULARIO PARA AGREGAR PRODUCTO */}
            <div className="h-auto w-full my-2">
                <div className="flex flex-wrap items-end justify-center">
                    <div className="flex flex-wrap justify-center">
                        <div>	
                            <label 
                            htmlFor='producto'
                            className="block mx-3 text-2xl text-center tracking-wide text-gray-700 font-bold mb-2">
                                <span>
                                    Agregar Producto
                                </span>
                                <select 
                                className='border-2 border-novablue mx-2 px-3 py-2 self-start rounded-md focus:outline-none focus:border-gray-500'
                                value={productoAAgregar.idProducto ?? ''}
                                onChange={(e) =>
                                    setProductoAAgregar(productos.filter((v) => v._id === e.target.value)[0])
                                }
                                >
                                <option  disabled value=''>
                                    Seleccione un producto
                                </option>
                                {
                                productos.map((el)=>{
                                    return(
                                        <option 
                                        key={nanoid()}
                                        value={el._id} 
                                        >{`${el.idProducto} ${el.descripcion} ${el.estadoP}`}</option>
                                        )
                                    })}
                                </select>
                            </label>
                        </div>
                    </div>
                    <div>
                        <button
                        type='button'
                        onClick={()=>agregarNuevoProducto()}
                        className='group relative w-auto flex py-2 px-2 border border-transparent text-sm font-medium rounded-md text-white bg-novablue hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500'
                        >
                        <div className='flex items-center justify-start'>
                            <i className="fas fa-plus"></i>
                            <span className='mx-2'>Agregar</span>
                        </div>
                        </button>
                    </div>
                </div>   
            </div>

            <table className="tabla mt-4 mr-4">
                <thead>
                    <tr>
                        <th className="text-center">ID Producto</th>
                        <th className="text-center">Descripción</th>
                        <th className="text-center">Cantidad</th>
                        <th className="text-center">Valor Unitario</th>
                        <th className="text-center">Subtotal</th>
                        <th className="text-center">Eliminar</th>
                        <th className='hidden'>Input</th>
                    </tr>
                </thead>
                <tbody>
                    {filasTabla.map((el, index) =>{
                        return(
                            <FilaProducto 
                            key = {el._id}
                            pro = {el}
                            index = {index}
                            eliminarProducto = {eliminarProducto}
                            modificarProducto = {modificarProducto}
                            />
                        )
                    })}
                </tbody>
            </table>
        </div>
    );
};

const FilaProducto = ({pro, index, eliminarProducto, modificarProducto}) =>{
    const [producto, setProducto] = useState(pro);
    useEffect(() => {
        console.log('pro', producto);
    }, [producto]); 

    return(
        <tr> 
            <td className='text-center'>{producto.idProducto}</td>
            <td className='text-center'>{producto.descripcion}</td>
            <td className='text-center'>
                <label htmlFor={`contenido_${index}`}>
                    <input 
                    type='number' 
                    name={`cantidad_${index}`} 
                    onChange={(e)=>{
                        modificarProducto(producto, e.target.value);
                        setProducto({
                            ...producto,
                            cantidad: e.target.value === '' ? '0' : e.target.value,
                            subTotal:
                            parseFloat(producto.valorU) *
                            parseFloat(e.target.value === '' ? '0' : e.target.value),
                        });
                    }}
                    className='border border-novablue mx-1 px-1 py-1 self-start rounded-md focus:outline-none focus:border-gray-500'
                    />
                </label>
            </td>
            <td className='text-center'>{producto.valorU}</td>
            <td className='text-center'>
                {parseFloat(producto.subTotal ?? 0)}
            </td>
            <td className='text-center'>
                <div className='flex justify-around'>
                    <div className='hover:bg-red-500'><i 
                    onClick={() => eliminarProducto(producto)}
                    className='fas fa-trash'></i></div>
                </div>
            </td>
            <td>
                <input hidden defaultValue={producto.idProducto} name={`producto_${index}`} />
            </td>
        </tr>
    )

}

export default BuscarActualizarVentas