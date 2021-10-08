import React from 'react'

const DataProducto = ({idproducto, descripcion, valorUnitario}) => {
    return(
        <tr>
            <td className="text-center">{idproducto}</td>
            <td className="text-center">{descripcion}</td>
            <td className="text-center">{valorUnitario}</td>
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
    )
}


export default DataProducto
