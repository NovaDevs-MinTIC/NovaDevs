import React  from 'react'

const RegistroProductos=()=>{

    return(
      <div className='h-full w-full'>
        {/* TITULO */}
        <div className='flex items-center justify-center w-full h-1/6'>
            <h2 className='text-4xl font-extrabold text-gray-900'>
            REGISTRO DE PRODUCTOS
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
                        name='Descripción'
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
                        name='valor-unitario'
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
                  name='estado-roducto'
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
export default RegistroProductos

