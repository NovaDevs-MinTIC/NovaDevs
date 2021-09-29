import React from 'react'

const DataVentas = ({ID_venta, descripcion_venta, cantidad, fecha_de_venta, ID_cliente, nombre_del_cliente, ID_vendedor, nombre_del_vendedor, valor_venta, alerta,estado}) => {
    return (
        <tr>
            <th scope="row">{ID_venta}</th>
            <td>{descripcion_venta}</td>
            <td>{cantidad}</td>
            <td>{fecha_de_venta}</td>
            <td>{ID_cliente}</td>
            <td>{nombre_del_cliente}</td>
            <td>{ID_vendedor}</td>
            <td>{nombre_del_vendedor}</td>
            <td>{valor_venta}</td>
            <td className={alerta}>{estado}</td>
            <td className="iconos">
                <button className="btn far fa-eye bg-info rounded"></button>
                <button className="btn far fa-edit bg-warning rounded"></button>
                <button className="fas fa-trash bg-danger border-0 rounded"></button>
            </td>
        </tr>
    )
}

export default DataVentas
