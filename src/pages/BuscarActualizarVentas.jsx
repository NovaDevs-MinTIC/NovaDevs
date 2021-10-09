import DataVentas from 'components/DataVentas'
import React from 'react'


const BuscarActualizarVentas = () => {
    return (
            
        <div className="h-full w-full">

            {/*Título*/}
            <div className='flex items-center justify-center w-full h-1/6'>
                <h2 className='text-4xl font-extrabold text-gray-900'>
                Estado de Venta
                </h2>
            </div>

            {/*Barras de búsqueda para la tabla */}
            <div className='flex items-center justify-center w-full h-auto'>
                <input
                placeholder='Búsqueda por ID de Venta'
                className='border-2 border-novablue mx-2 px-3 py-1 rounded-md focus:outline-none focus:border-gray-500'
                />
                <input
                placeholder='Búsqueda por Cliente'
                className='border-2 border-novablue mx-2 px-3 py-1 rounded-md focus:outline-none focus:border-gray-500'
                />
                <button className=' bg-novablue rounded border-novablue border-2 p-1 focus:outline-none focus:border-gray-500'>
                    Buscar
                </button>
            </div>
            {/*Contenedor de la tabla de Buscar y actualizar venta*/}
            <div>
                <DataVentas />
            </div>

            
        </div>
    )
}

export default BuscarActualizarVentas
