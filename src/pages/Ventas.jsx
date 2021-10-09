import React from 'react'
import 'App.css'

const Ventas = () => {
    return (
        <div className='h-full w-auto'>
            {/* <div className='flex h-full w-full flex-col items-center justify-start p-8'> */}
                {/* TITULO */}
                <div className='flex items-center justify-center w-full h-1/6'>
                    <h2 className='text-4xl font-extrabold text-gray-900'>
                    Registro de Ventas
                    </h2>
                </div>
                {/* FORMULARIO DE VENTA */}
                <form>
                    <div className="w-full h-auto flex flex-wrap justify-center items-center">
                        <div >	
                            <label className="mx-3 block uppercase tracking-wide text-gray-700 font-bold mb-2">ID Venta</label>
                            <input
                            placeholder='ID Venta'
                            type="text"
                            className='border-2 border-novablue mx-2 px-3 py-1 self-start rounded-md focus:outline-none focus:border-gray-500'
                            />
                        </div>
                        <div>	
                            <label className="mx-3 block uppercase tracking-wide text-gray-700 font-bold mb-2">Fecha Venta</label>
                            <input
                            type="date"
                            className='border-2 border-novablue mx-2 px-3 py-1 self-start rounded-md focus:outline-none focus:border-gray-500'
                            />
                        </div>
                        <div>	
                            <label className="mx-3 block uppercase tracking-wide text-gray-700 font-bold mb-2">Cliente</label>
                            <input
                            type="text"
                            placeholder='Cliente'
                            className='border-2 border-novablue mx-2 px-3 py-1 self-start rounded-md focus:outline-none focus:border-gray-500'
                            />
                        </div>
                        <div>	
                            <label className="mx-3 block uppercase tracking-wide text-gray-700 font-bold mb-2">ID Cliente</label>
                            <input
                            type="number"
                            placeholder='ID Cliente'
                            className='border-2 border-novablue mx-2 px-3 py-1 self-start rounded-md focus:outline-none focus:border-gray-500'
                            />
                        </div>
                        <div>	
                            <label className="mx-3 block uppercase tracking-wide text-gray-700 font-bold mb-2">Vendedor</label>
                            <input
                            type="text"
                            placeholder='Cliente'
                            className='border-2 border-novablue mx-2 px-3 py-1 self-start rounded-md focus:outline-none focus:border-gray-500'
                            />
                        </div>
                        {/* <div>	
                            <label className="mx-3 block uppercase tracking-wide text-gray-700 font-bold mb-2">ID Vendedor</label>
                            <input
                            type="number"
                            placeholder='ID Vendedor'
                            className='border-2 border-novablue mx-2 px-3 py-1 self-start rounded-md focus:outline-none focus:border-gray-500'
                            />
                        </div> */}
                    </div>
                </form>
                {/* FORMULARIO PARA AGREGAR PRODUCTO */}
                <div className="h-auto w-full my-2">
                    <h3 className="text-2xl font-extrabold text-gray-900 text-center">Agregar Producto</h3>
                    <div className="flex flex-wrap items-end justify-center">
                        <div className="flex flex-wrap justify-center">
                            <div>	
                                <label className="mx-3 block uppercase tracking-wide text-gray-700 font-bold mb-2">ID Producto</label>
                                <input
                                placeholder='ID Venta'
                                type="text"
                                className='border-2 border-novablue mx-2 px-3 py-1 rounded-md focus:outline-none focus:border-gray-500'
                                />
                            </div>
                            <div>	
                                <label className="mx-3 block uppercase tracking-wide text-gray-700 font-bold mb-2">Descripción</label>
                                <input
                                type="text"
                                className='border-2 border-novablue mx-2 px-3 py-1 rounded-md focus:outline-none focus:border-gray-500'
                                />
                            </div>
                            <div>	
                                <label className="mx-3 block uppercase tracking-wide text-gray-700 font-bold mb-2">Cantidad</label>
                                <input
                                type="number"
                                className='border-2 border-novablue mx-2 px-3 py-1 rounded-md focus:outline-none focus:border-gray-500'
                                />
                            </div>
                        </div>
                        <div>
                            <button
                            type='submit'
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
                {/* TABLA PARA VISUALIZAR PRODUCTOS AGREGADOS */}
                <div className="w-full h-2/5">
                    <table class="tabla mt-4">
                        <thead>
                            <tr>
                                <th className="text-center">ID Producto</th>
                                <th className="text-center">Descripción</th>
                                <th className="text-center">Cantidad</th>
                                <th className="text-center">Valor Unitario</th>
                                <th className="text-center">Subtotal</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>00123</td>
                                <td>Adidas Stan Smith</td>
                                <td>12</td>
                                <td>229900</td>
                                <td>2435321</td>
                            </tr>
                            <tr>
                                <td>00123</td>
                                <td>Adidas Stan Smith</td>
                                <td>12</td>
                                <td>229900</td>
                                <td>2435321</td>
                            </tr>
                            <tr>
                                <td>00123</td>
                                <td>Adidas Stan Smith</td>
                                <td>12</td>
                                <td>229900</td>
                                <td>2435321</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
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
        </div>
    )
}

export default Ventas
