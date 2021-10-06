import React  from 'react'

const RegistroProductos=()=>{

    return(
      <div>
        <div className='max-w-md w-screen space-y-8'>
          <h2 className='text-center'>Registro de producto</h2>
          <form className='mt-8 space-y-3'>
            <div className='rounded-md shadow-sm -space-y-px'>
              <div>
                  <label classsName='mx-2'>Identificador de producto</label>
                  <input
                          name='ID-Producto'
                          type='number'
                          autoComplete='number'
                          required
                          className='appearance-none rounded-md relative block w-full mb-2 px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
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
                        className='appearance-none rounded-md relative block w-full mb-2 px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
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
                        className='appearance-none rounded-md relative block w-full mb-2 px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
                        placeholder='Valor unitario'
                      />
              </div>
              <div>
                <label classsName="mx-2">Estado del producto</label>
                <select 
                  name='estado-roducto'
                  required
                  className='rounded-md relative block w-full mb-2 px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
                >
                  <option  disabled selected>Estado del producto</option>
                  <option value="1">Disponible</option>
                  <option value="2">No disponible</option>
                </select>
              </div>
            </div>
          </form>
        </div>

        <div className='max-w-md w-full'>
          <div>
            <button
              type='submit'
              className='group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-novablue hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500'
            >
              <div className='flex items-center justify-start'>
                <span className='mx-4'>Registrar</span>
              </div>
            </button>
          </div>
        </div>

      </div>        
    )
}
export default RegistroProductos

