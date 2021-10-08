import React, {useState,useEffect} from 'react'
import { nanoid } from 'nanoid';

const VentaBackend = [
    {
        idVenta:9898,
        descripcionVenta:"zapatos,tennis,chanclas",
        cantidad:3,
        fechaVenta:"25/1/2003",
        idCliente:65165184,
        nombreCliente: "juan Perez Toro",
        idVendedor:651954194,
        nombreVendedor:"Jose tobar taberas",
        valorVenta:6545116541,
        alerta:"bg-warning",
        estado:"En proceso"
    },
    {
        idVenta:4545,
        descripcionVenta:"tennis, zapatillas, tacones",
        cantidad:6,
        fechaVenta:"44/5/2001",
        idCliente:65165184,
        nombreCliente: "juan Perez Toro",
        idVendedor:651954194,
        nombreVendedor:"Jose tobar taberas",
        valorVenta:6545116541,
        alerta:"bg-success",
        estado:"Entregado"
    },
    {
        idVenta:7878,
        descripcionVenta:"zapatos,tennis,chanclas",
        cantidad:3,
        fechaVenta:"25/1/2003",
        idCliente:65165184,
        nombreCliente: "juan Perez Toro",
        idVendedor:651954194,
        nombreVendedor:"Jose tobar taberas",
        valorVenta:6545116541,
        alerta:"bg-warning",
        estado:"En proceso"
    },
    {
        idVenta:3232,
        descripcionVenta:"zapatos,tennis,chanclas",
        cantidad:10,
        fechaVenta:"25/1/2003",
        idCliente:65165184,
        nombreCliente: "Maria euclide tartago",
        idVendedor:651954194,
        nombreVendedor:"Jose maria maria",
        valorVenta:6545116541,
        alerta:"bg-danger",
        estado:"Cancelado"
    }
]

//Contacto con la base de datos
const DataVentas = () => {
    
    const [venta, setVenta] = useState([]);

    useEffect(() => {
        setVenta(VentaBackend)
    }, []);

    return(
        <TablaVentas listaVentas={venta} />
    );
}

//tabla SIN contenedores
const TablaVentas = ({listaVentas}) =>{
    
    return (
        <table className="tabla table-auto">
            <thead>
                <tr>
                    <th className="w-1/12">ID Venta</th>
                    <th className="w-1/12">Descripción de venta</th>
                    <th>Fecha de venta</th>
                    <th>ID Cliente</th>
                    <th>Nombre del cliente</th>
                    <th>ID Vendedor</th>
                    <th>Nombre del vendedor</th>                                
                    <th>Valor Venta</th> 
                    <th className='w-1/12'>Estado</th>
                    <th className='w-1/12'>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {listaVentas.map((venta) =>{
                    return(
                        <tr key={nanoid()}>
                            <th scope="row">{venta.idVenta}</th>
                            <td className="text-center">
                                <i className="rounded bg-novablue border-solid border-2 border-novablue far fa-eye"></i>
                            </td>
                            <td>{venta.fechaVenta}</td>
                            <td>{venta.idCliente}</td>
                            <td>{venta.nombreCliente}</td>
                            <td>{venta.idVendedor}</td>
                            <td>{venta.nombreVendedor}</td>
                            <td>{venta.valorVenta}</td>
                            <td className={venta.alerta}>{venta.estado}</td>

                            <td className="text-center">
                                <div className="flex justify-around">
                                    <button className="rounded border-solid border-2 border-novablue far fa-edit bg-info"></button>

                                    <button className="rounded border-solid border-2 border-red-600 far fa-trash-alt bg-danger"></button>
                                </div>
                            </td>
                        </tr>
                    )
                })}    
            </tbody>
        </table>
    )
}

export default DataVentas

