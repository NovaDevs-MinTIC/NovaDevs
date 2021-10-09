import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'

const GestionProducto = () => {
    const [mostrarTabla, setMostrarTabla] = useState(true);
    const [textoBoton,setTextoBoton]=useState('Registrar producto');
    //Renderizacion condicional
    useEffect(() => {
        if (mostrarTabla) {
          setTextoBoton('Registrar Producto');
         
        } else {
          setTextoBoton('Ver productos');
         
        }
      }, [mostrarTabla]);



    return (
        <div className="w-full h-full">

             {/*Botón Para regresar*/}
             <div className='flex justify-end mx-2'>
                <button
                onClick={()=>{
                    setMostrarTabla(!mostrarTabla);
                }}
                className=' py-2 px-3 justify-end border border-transparent text-sm font-medium rounded-md text-white bg-novablue hover:bg-gray-300 hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 mx-10 my-4'
                >{textoBoton}
                <div className='flex items-center justify-start'>
                    <span className='mx-4'></span>
                </div>
                </button>
            </div>
            {/* Renderización condicional*/}
            {mostrarTabla ? (
                <RenderProductos />
            ) : (
                <RegistroProductos />
            )}

           
        </div>
    )
}

const RenderProductos = () => {
    //comentario
    return (
        <>
            
            <div className='flex items-center justify-center w-full h-1/6'>
                <h2 className='text-4xl font-extrabold text-gray-900'>
                    Gestión de Productos
                </h2>
            </div>
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
            <div className='hidden md:flex w-full mt-12'>
                <TablaProductos />
            </div>
        </>
    )
}


const TablaProductos = ({infoBackend}) =>{
    return(
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
                <tr>
                    <td className="text-center">651651</td>
                    <td className="text-center">tennis</td>
                    <td className="text-center">6515161</td>
                    <td className="text-center">
                        <select className="rounded-lg m-2 w-auto">
                            <option disabled>Estado</option>
                            <option>Disponible</option>
                            <option>No Disponible</option>
                        </select>
                    </td>
                    <td className='text-center'>
                        <div className="flex justify-around">
                        <div className="hover:bg-yellow-500"> 
                            <i className="fas fa-edit"></i>
                        </div>
                        <div className="hover:bg-red-600">
                            <i className="fas fa-trash"></i>
                        </div>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    )
}

const RegistroProductos = () => {

    return(
      <div className='h-full w-full'>
        {/* TITULO */}
        <div className='flex items-center justify-center w-full h-1/6'>
            <h2 className='text-4xl font-extrabold text-gray-900'>
            Registro de Productos
            </h2>
        </div>

        {/* FORMULARIO DE REGISTRO DE PRODUCTO */}
        <div className="w-full h-1/2 flex flex-wrap justify-center items-center">
          <form>
              <div>
                  <label>Identificador de producto</label>
                  <input
                          name='idproducto'
                          type='number'
                          required
                          className='appearance-none rounded-md relative w-full mb-2 px-3 py-2 border border-novablue placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
                          placeholder='ID Producto'
                        />
              </div>
              <div>
                <label classsName="mx-2">Descripción</label>
                <textarea
                        name='descripcion'
                        type='text'
                        autoComplete='text'
                        required
                        className='appearance-none rounded-md relative block w-full mb-2 px-3 py-2 border border-novablue placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
                        placeholder='Descripción'
                      />
              </div>
              <div>
                <label classsName="mx-2">$ Valor Unitario</label>
                <input
                        name='valorU'
                        type='number'
                        autoComplete='number'
                        required
                        className='appearance-none rounded-md relative block w-full mb-2 px-3 py-2 border border-novablue placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
                        placeholder='Valor unitario'
                      />
              </div>
              <div>
                <label classsName="mx-2">Estado del producto</label>
                <select 
                  name='estadoP'
                  required
                  className='rounded-md relative block w-full mb-2 px-3 py-2 border border-novablue placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
                >
                  <option  disabled selected>Estado del producto</option>
                  <option value="1">Disponible</option>
                  <option value="2">No disponible</option>
                </select>
              </div>
          </form>
        </div>
        <div className="flex justify-center mt-6">
            <button
            type='submit'
            className='group relative w-auto flex py-2 px-2 border border-transparent text-sm font-medium rounded-md text-white bg-novablue hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500'
            >
            <div className='flex items-center'>
                <i className="fas fa-plus"></i>
                <span className='mx-2'>Registrar</span>
            </div>
            </button>
        </div>
      </div>        
    )
}

export default GestionProducto
