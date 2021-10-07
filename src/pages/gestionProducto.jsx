import React from 'react'
import DataProducto from 'components/DataProducto'
import { Link } from 'react-router-dom'


const gestionProducto = () => {
    return (
        <div className="w-full h-full">
            {/*Título*/}
            <div className='flex items-center justify-center w-full h-1/6'>
                <h2 className='text-4xl font-extrabold text-gray-900'>
                GESTIÓN DE PRODUCTOS
                </h2>
            </div>
            {/*Barras de búsqueda para la tabla */}
            <div className='flex items-center justify-center w-full h-auto'>
                <input
                placeholder='Búsqueda por Nombre'
                className='border-2 border-novablue mx-2 px-3 py-1 rounded-md focus:outline-none focus:border-gray-500'
                />
                <input
                placeholder='Búsqueda por ID'
                className='border-2 border-novablue mx-2 px-3 py-1 rounded-md focus:outline-none focus:border-gray-500'
                />
            </div>

            {/* TABLA DE PRODUCTOS*/}
            <div className='hidden md:flex w-full mt-12'>
                    <table class="tabla">
                        <thead>
                            <tr>
                                <th className="text-center">ID Producto</th>
                                <th className="text-center">Descripción</th>
                                <th className="text-center">Valor Unitario</th>
                                <th className="text-center">Estado</th>
                                <th className="text-center">Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            <DataProducto idproducto="010010" descripcion="Adidas Stan Smith" valorUnitario="229900"/>
                            <DataProducto idproducto="010010" descripcion="Adidas Stan Smith" valorUnitario="229900"/>
                            <DataProducto idproducto="010010" descripcion="Adidas Stan Smith" valorUnitario="229900"/>
                        </tbody>
                    </table>
            </div>
            {/*Botón Para regresar*/}
            <div className='flex justify-end mx-2'>
                <Link to="/RegistroProducto">
                        <button
                        className='py-2 px-3 justify-end border border-transparent text-sm font-medium rounded-md text-white bg-novablue hover:bg-gray-300 hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500'
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

export default gestionProducto
