import React from 'react'
// import DataVentas from 'components/DataVentas'
import { Link } from 'react-router-dom'


const BuscarActualizarVentas = () => {
    return (
            
        <div className="h-full w-full">

            {/*Título*/}
            <div className='flex flex-col w-full mt-2'>
                <h2 className='text-3xl font-extrabold text-gray-900 text-center'>
                ESTADO DE VENTA
                </h2>
            </div>
            {/*Barras de búsqueda para la tabla */}
            <div className='flex flex-row items-center justify-center w-full mt-20'>
                <input
                placeholder='Búsqueda por ID de Venta'
                className='border-2 border-novablue mx-2 px-3 py-1 self-start rounded-md focus:outline-none focus:border-gray-500'
                />
                <input
                placeholder='Búsqueda por Cliente'
                className='border-2 border-novablue mx-2 px-3 py-1 self-start rounded-md focus:outline-none focus:border-gray-500'
                />
            </div>

            {/* NUEVA TABLA DE VENTAS */}
            
            <div className="w-full flex flex-wrap">
                <table className="tabla">
                    <thead>
                        <tr>
                            <th className="text-center">ID Venta</th>
                            <th className="text-center">Descripción de venta</th>
                            <th className="text-center">Fecha Venta</th>
                            <th className="text-center">Valor Venta</th> 
                            <th className="text-center">Estado Venta</th>
                            <th className="text-center">Cliente</th>
                            <th className="text-center">Vendedor</th>                                
                            <th className="text-center">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>

                    </tbody>
                </table>
            </div>
            {/*Contenedor de la tabla de Buscar y actualizar venta*/}
            {/* <div className="container">
                <div className="tabla">
                    <DataVentas />
                </div>
            </div> */}
            
            {/*Botón Para regresar*/}
            <div className='flex justify-end mx-2'>
                <Link to="/Ventas">
                        <button
                        className='py-2 px-4 justify-end border border-transparent text-sm font-medium rounded-md text-white bg-novablue hover:bg-gray-300 hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500'
                        >
                        <div className='flex items-center justify-start'>
                            <span className='mx-4'>Regresar</span>
                        </div>
                        </button>
                </Link>
            </div>
        </div>
    )
}

export default BuscarActualizarVentas
