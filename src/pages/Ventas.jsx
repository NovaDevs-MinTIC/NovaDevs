import React, {useEffect, useState, useRef} from 'react'
import 'App.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Ventas = () => {

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

    const [articulosVenta, setArticulosVenta] = useState([]);

    useEffect( () => {
        // Obtener lista de articulos
        setArticulosVenta(articulosVentaBackend);
    }, []);

    return (
        <div className='h-full w-auto'>
            {/* <div className='flex h-full w-full flex-col items-center justify-start p-8'> */}
                {/* TITULO */}
                <div className='flex items-center justify-center w-full h-1/6'>
                    <h2 className='text-4xl font-extrabold text-gray-900'>
                    REGISTRO DE VENTAS
                    </h2>
                </div>
                {/* FORMULARIO DE VENTA */}
                <form>
                    <div className="w-full h-auto flex flex-wrap justify-center items-center">
                        <div >	
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
                            <input
                            name = 'vendedor'
                            type="text"
                            placeholder='Cliente'
                            className='border-2 border-novablue mx-2 px-3 py-1 self-start rounded-md focus:outline-none focus:border-gray-500'
                            />
                        </div>
                        {/* <div>	
                            <label className="mx-3 block uppercase tracking-wide text-gray-700 font-bold mb-2" htmlFor = 'id-vendedor'>ID Vendedor</label>
                            <input
                            name = 'id-vendedor
                            type="number"
                            placeholder='ID Vendedor'
                            className='border-2 border-novablue mx-2 px-3 py-1 self-start rounded-md focus:outline-none focus:border-gray-500'
                            />
                        </div> */}
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
            {/* </div> */}
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
                                <td className='text-center'>$ {articulo.valorUnitario}</td>
                                <td className='text-center'>$ {articulo.cantidad * articulo.valorUnitario}</td>
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
                            <div>	
                                <label className="mx-3 block uppercase tracking-wide text-gray-700 font-bold mb-2">Valor Unitario</label>
                                <input
                                type="number"
                                placeholder='Valor unitario'
                                value={valorUnitario}
                                onChange={(e)=>{setValorUnitario(e.target.value)}}
                                className='border-2 border-novablue mx-2 px-3 py-1 rounded-md focus:outline-none focus:border-gray-500'
                                />
                            </div>
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

export default Ventas