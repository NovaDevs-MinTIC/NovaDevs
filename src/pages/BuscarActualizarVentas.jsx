import React from 'react'
import { nanoid } from 'nanoid';
import { ToastContainer, toast } from 'react-toastify';
import { Dialog, Tooltip } from '@material-ui/core';
import { useState, useEffect, useRef } from 'react'
import 'react-toastify/dist/ReactToastify.css';
import { obtenerUsuarios, obtenerProductos } from 'utils/api';
import { crearVenta, obtenerVentas, editarVenta, quitarVenta } from 'utils/api';

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

    useEffect(() =>{
        const fetchVentas = async () =>{
            await obtenerVentas(
                (response) => {
                    console.log('respuesta a GET usuarios: ', response);
                    setVentas(response.data);
                },
                (error) => {
                    console.error(error);
                }
            )
        }
        setEjecutarConsulta(false);
        fetchVentas();
    }, [ejecutarConsulta]);

    

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
                <Ventas setEjecutarConsulta={setEjecutarConsulta} setMostrarTabla={setMostrarTabla}/>
            )}
            <ToastContainer position='bottom-center' autoClose={5000} />
        </div>
    );
}

const GestionVentas = ({listaVentas, setEjecutarConsulta}) => {
    const [busqueda, setBusqueda] = useState('');
    const [ventasFiltradas, setVentasFiltradas] = useState(listaVentas);

    useEffect(() => {
        setVentasFiltradas(
          listaVentas.filter((elemento) => {
            return JSON.stringify(elemento).toLowerCase().includes(busqueda.toLowerCase());
          })
        );
      }, [busqueda, listaVentas, setEjecutarConsulta]);

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
                            {/* <th>ID Vendedor</th> */}
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
                                venta = {venta}
                                setEjecutarConsulta={setEjecutarConsulta} />
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

const FilaVentas = ({venta, setEjecutarConsulta}) =>{
    const [edit,setEdit] = useState(false);
    const [openDialog,setOpenDialog] = useState(false);
    const [alerta, setAlerta] = useState('')
    const [infoNuevaVenta, setInfoNuevaVenta] = useState({});

    const infoVenta = () =>{
        let array = {
            idVenta: venta._id.slice(18),  
            fechaVenta: venta.fechaVenta,
            idCliente: venta.idCliente,
            cliente: venta.cliente,
            vendedor: venta.vendedor,
            nombreVendedor: venta.vendedor.name,
            valorVenta: venta.valorVenta,
            estado: venta.estado,
        }
        setInfoNuevaVenta(array)
    }


    const actualizarVenta = async () => {
        await editarVenta(
            venta._id,
            { ...infoNuevaVenta },
            (response)=>{
                console.log(response.data);
                toast.success('Venta modificada con éxito');
                setEdit(false);
                setEjecutarConsulta(true);
            },
            (error)=>{
                toast.error('Error modificando la venta');
                console.error(error);
            }
        )
    }

    const eliminarVenta = async () => {
        await quitarVenta(
            venta._id,
            (response)=>{
                console.log(response.data);
                toast.success('Venta eliminada con éxito');
                setEjecutarConsulta(true);
            },
            (error)=>{
                console.error(error);
                toast.error('Error eliminando la venta');
            }
        )
    setOpenDialog(false);
    }; 

    useEffect(() => {
        infoVenta()
    }, []);

    useEffect(() => {
        if(infoNuevaVenta.estado === "Entregado" || infoNuevaVenta.estado === "entregado"){
            setAlerta('success')
        }else if (infoNuevaVenta.estado === "En proceso" || infoNuevaVenta.estado === "en proceso") {
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
                        {venta.productos.map((el) =>{
                            return <>
                        {`${el.descripcion}${el.cantidad} UN`}
                        <br />
                        </>
                    })}
                    </td>
                    <td className='text-center'>
                        <input 
                            className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-2'
                            type='date'
                            value={infoNuevaVenta.fechaVenta}
                            onChange={(e) => setInfoNuevaVenta({ ...infoNuevaVenta, fechaVenta: e.target.value })}
                        /></td>
                    <td className='text-center'>
                        <input 
                            className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-2'
                            type='text'
                            value={infoNuevaVenta.idCliente}
                            onChange={(e) => setInfoNuevaVenta({ ...infoNuevaVenta, idCliente: e.target.value })}
                        /></td>
                    <td className='text-center'>
                        <input 
                            className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-2'
                            type='text'
                            value={infoNuevaVenta.cliente}
                        onChange={(e) => setInfoNuevaVenta({ ...infoNuevaVenta, cliente: e.target.value})}
                        /></td>
                    <td className='text-center'>{infoNuevaVenta.nombreVendedor}</td>
                    <td className='text-center'>{infoNuevaVenta.valorVenta}</td>
                    <td className='text-center'>
                        <select 
                            className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-2'
                            type='select'
                            value={infoNuevaVenta.estado}
                            onChange={(e) => setInfoNuevaVenta({ ...infoNuevaVenta, estado: e.target.value })}
                            defaultValue="0">

                            <option disabled value="0">Seleccione una opción</option>
                            <option value="Entregado">Entregado</option>
                            <option value="En proceso">En proceso</option>
                            <option value="Cancelado">Cancelado</option>
                        </select>
                    </td>                    
                </>
            ):(
            <>
                <td className='text-center'>{infoNuevaVenta.idVenta}</td>
                <td className="text-center">
                    {venta.productos.map((el) =>{
                            return <>
                        {`${el.descripcion}, ${el.cantidad} UN`}
                        <br />
                        </>
                    })}
                </td>
                <td className='text-center'>{infoNuevaVenta.fechaVenta}</td>
                <td className='text-center'>{infoNuevaVenta.idCliente}</td>
                <td className='text-center'>{infoNuevaVenta.cliente}</td>
                <td className='text-center'>{infoNuevaVenta.nombreVendedor}</td>
                <td className='text-center'>{infoNuevaVenta.valorVenta}</td>
                <td className={`bg-${alerta} text-center`}>{infoNuevaVenta.estado}</td>
            </>
            )}

            {edit ? (
                <>
                    <div className= "flex justify-around mt-2">
                        <Tooltip title='Confirmar Edición' arrow>
                            <i
                            className='fas fa-check text-green-700 hover:text-green-500'
                            onClick={() => actualizarVenta()}
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
                        <Tooltip title='Editar Venta' arrow>
                            <button
                            onClick={() => setEdit(!edit)} 
                            className="rounded border-solid border-2 border-novablue far fa-edit bg-info">
                            </button>
                        </Tooltip>
                        <Tooltip title='Eliminar Venta' arrow>
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
                    ¿Está seguro de querer eliminar la venta?
                    </h1>
                    <div className='flex w-full items-center justify-center my-4'>
                        <button
                        onClick={() => eliminarVenta()}
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

const Ventas = ({setEjecutarConsulta, setMostrarTabla}) => {
    const form = useRef(null);
    const [vendedores, setVendedores] = useState([]);
    const [productos, setProductos] = useState([]);
    const [productosTabla, setProductosTabla] = useState([]);
    const [totalVenta, setTotalVenta] = useState(0);
    
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

        const DataVenta = {
            fechaVenta: formData.fechaVenta,
            idCliente: formData.idCliente,
            cliente: formData.cliente,
            vendedor: vendedores.filter((v) => v._id === formData.vendedor)[0],
            valorVenta : totalVenta,   // SE DEBE MODIFICAR CUANDO HALLEMOS LA FORMA DE BUSCAR EL VALOR TOTAL
            estado: "En proceso",
            productos: productosTabla,
        }
    
        console.log(DataVenta)

        await crearVenta(
            DataVenta,
            (response) => {
                console.log(response);
                toast.success('Venta agregada con éxito');
                setMostrarTabla(true);
                setEjecutarConsulta(true)
            },
            (error) => {
                console.error(error);
                toast.error('Error creando una venta');
            }
        );
    };

    return (
        <div className='h-full w-auto'>
            <form ref={form} onSubmit={submitForm}>
                    <div className = "flex justify-center" >
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
                            <label className="mx-3 block uppercase tracking-wide text-gray-700 font-bold mb-2" 
                            htmlFor='vendedores'>Vendedor</label>
                                <select
                                name = 'vendedor'
                                className='border-2 border-novablue mx-2 px-3 py-1 self-start rounded-md focus:outline-none focus:border-gray-500'
                                required
                                defaultValue=''>
                                    <option  disabled selected value=''>Seleccione un vendedor</option>
                                        {vendedores.map((el)=>{
                                            return(
                                                <option key={nanoid()} value={el._id} >{`${el.name}`}</option>
                                                )
                                            })}
                                </select>
                        </div>
                    </div>
                <TablaArticulos 
                productos={productos}
                setProductos={setProductos}
                setProductosTabla={setProductosTabla}
                setTotalVenta = {setTotalVenta}
                />
                
                {/* PIE DE VENTA */}
                <div className="w-full  h-auto">
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

const TablaArticulos = ({productos, setProductos, setProductosTabla, setTotalVenta}) => {
    const [productoAAgregar, setProductoAAgregar] = useState({});
    const [filasTabla, setFilasTabla] = useState([]);
    const [totalVentas, setTotalVentas] = useState(0);
    
    useEffect(()=>{
        let total = 0;
        filasTabla.forEach((f)=>{
            total = total + f.total
        })
        setTotalVentas(total)
        setTotalVenta(total)
    },[filasTabla, setTotalVenta])

    useEffect(() => {
        setProductosTabla(filasTabla);
        console.log(filasTabla)
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
                if (ft._id === producto._id){
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
            <div className="h-auto w-full my-4">
                <div className="flex items-start justify-center">
                    <div className="flex flex-wrap justify-center">
                        <div className='flex items-end justify-end'>	
                            <label 
                            htmlFor='producto'
                            className="mx-3 text-lg text-center tracking-wide text-gray-700 font-bold mb-2">
                                <span>
                                    Agregar Producto
                                </span>
                                <select 
                                className='border-2 border-novablue mx-2 px-3 py-1 self-start rounded-md focus:outline-none focus:border-gray-500'
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
                                        >{`${el.descripcion}`}</option>
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

            <table className="tabla mt-4">
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
            <div className="w-full justify-end flex flex-wrap">
                <div>
                    <span className="mx-8 px-4 font-extrabold uppercase text-xl">VALOR TOTAL</span>
                </div>
                <div>
                    <span className="mx-8 px-4 text-lg">$ {totalVentas}</span>
                </div>
            </div>
        </div>
    );
};

const FilaProducto = ({pro, index, eliminarProducto, modificarProducto}) =>{
    const [producto, setProducto] = useState(pro);

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