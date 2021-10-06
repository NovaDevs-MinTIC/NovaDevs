import React from 'react'
import 'App.css'

const Ventas = () => {
    return (
        <div className='flex h-full w-full'>
            <div className='flex h-full w-full flex-col items-center justify-start p-8'>
                <div className='flex flex-col w-full mt-2'>
                    <h2 className='text-3xl font-extrabold text-gray-900 text-center'>
                    REGISTRO DE VENTAS
                    </h2>
                </div>
                <form className='mt-4 space-y-6'>
                    <div className="grid grid-cols-6">
                        <div >	
                            <label className="mx-3 block uppercase tracking-wide text-gray-700 font-bold mb-2">ID Venta</label>
                            <input
                            placeholder='ID Venta'
                            type="text"
                            className='border-2 border-novablue mx-2 px-1 py-1 self-start rounded-md focus:outline-none focus:border-gray-500'
                            />
                        </div>
                        <div>	
                            <label className="mx-3 block uppercase tracking-wide text-gray-700 font-bold mb-2">Fecha Venta</label>
                            <input
                            type="date"
                            className='border-2 border-novablue mx-2 px-2 py-1 self-start rounded-md focus:outline-none focus:border-gray-500'
                            />
                        </div>
                        <div>	
                            <label className="mx-3 block uppercase tracking-wide text-gray-700 font-bold mb-2">Cliente</label>
                            <input
                            type="text"
                            placeholder='Cliente'
                            className='border-2 border-novablue mx-1 px-1 py-1 self-start rounded-md focus:outline-none focus:border-gray-500'
                            />
                        </div>
                        <div>	
                            <label className="mx-3 block uppercase tracking-wide text-gray-700 font-bold mb-2">ID Cliente</label>
                            <input
                            type="number"
                            placeholder='ID Cliente'
                            className='border-2 border-novablue mx-2 px-1 py-1 self-start rounded-md focus:outline-none focus:border-gray-500'
                            />
                        </div>
                        <div>	
                            <label className="mx-3 block uppercase tracking-wide text-gray-700 font-bold mb-2">Vendedor</label>
                            <input
                            type="text"
                            placeholder='Cliente'
                            className='border-2 border-novablue mx-2 px-1 py-1 self-start rounded-md focus:outline-none focus:border-gray-500'
                            />
                        </div>
                        <div>	
                            <label className="mx-3 block uppercase tracking-wide text-gray-700 font-bold mb-2">ID Vendedor</label>
                            <input
                            type="number"
                            placeholder='ID Vendedor'
                            className='border-2 border-novablue mx-2 px-1 py-1 self-start rounded-md focus:outline-none focus:border-gray-500'
                            />
                        </div>
                    </div>
                </form>
                <h3 className="text-2xl font-extrabold text-gray-900 text-center mt-4 mb-2">Agregar Producto</h3>
                <div className="flex flex-wrap items-end justify-center">
                    <div className="flex flex-wrap justify-center">
                        <div>	
                            <label className="mx-3 block uppercase tracking-wide text-gray-700 font-bold mb-2">ID Producto</label>
                            <input
                            placeholder='ID Venta'
                            type="text"
                            className='border-2 border-novablue mx-2 px-3 py-1 self-start rounded-md focus:outline-none focus:border-gray-500'
                            />
                        </div>
                        <div>	
                            <label className="mx-3 block uppercase tracking-wide text-gray-700 font-bold mb-2">Descripción</label>
                            <input
                            type="text"
                            className='border-2 border-novablue mx-2 px-3 py-1 self-start rounded-md focus:outline-none focus:border-gray-500'
                            />
                        </div>
                        <div>	
                            <label className="mx-3 block uppercase tracking-wide text-gray-700 font-bold mb-2">Cantidad</label>
                            <input
                            type="number"
                            className='border-2 border-novablue mx-2 px-3 py-1 self-start rounded-md focus:outline-none focus:border-gray-500'
                            />
                        </div>
                    </div>
                    <div>
                        <button
                        type='submit'
                        className='group relative w-auto flex justify-center py-2 px-2 border border-transparent text-sm font-medium rounded-md text-white bg-novablue hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500'
                        >
                        <div className='flex items-center justify-start'>
                            <i className="fas fa-plus"></i>
                            <span className='mx-2'>Agregar</span>
                        </div>
                        </button>
                    </div>
                </div>
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
                <div className="w-full justify-end flex flex-wrap">
                    <div>
                        <span className="mx-8 px-4 font-extrabold uppercase text-xl">VALOR TOTAL</span>
                    </div>
                    <div>
                        <span className="mx-8 px-4 text-lg">$ 3456998231</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Ventas
