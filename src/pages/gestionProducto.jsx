import React from 'react'
import DataProducto from 'components/DataProducto'


const gestionProducto = () => {
    return (
        <div className="contenedorProducto">
            
        <div className="container">

            {/*Título*/}
            <div className='flex flex-col w-full mt-2'>
                <h2 className='text-3xl font-extrabold text-gray-900 text-center'>
                GESTIÓN DE PRODUCTOS
                </h2>
            </div>

            {/*Barras de búsqueda para la tabla*/}
            <div className='flex flex-row items-center justify-center w-full mt-20'>
                <input
                placeholder='Búsqueda por Nombre'
                className='border-2 border-novablue mx-2 px-3 py-1 self-start rounded-md focus:outline-none focus:border-gray-500'
                />
                <input
                placeholder='Búsqueda por ID'
                className='border-2 border-novablue mx-2 px-3 py-1 self-start rounded-md focus:outline-none focus:border-gray-500'
                />
            </div>

            {/*Contenedor de la tabla de Buscar y actualizar venta*/}
            <div className="w-full h-full">
                <div className="tabla">
                    <DataProducto />
                </div>
            </div>
            
            {/*Botón Para regresar*/}
            <div className="container mt-3 mb-3 d-flex flex-row-reverse">
                <button type="button" className="btn">Regresar</button>
            </div>
        </div>
        </div>
    )
}

export default gestionProducto
