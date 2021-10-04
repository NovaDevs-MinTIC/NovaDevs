import { nanoid } from 'nanoid';
import React, {useState,useEffect} from 'react'

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
        <div className="contenedor-tabla-venta">
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col-sm">ID Venta</th>
                        <th scope="col-sm">Descripción de venta</th>
                        <th scope="col-sm">Cantidad</th>
                        <th scope="col-sm">Fecha de venta</th>
                        <th scope="col-sm">ID Cliente</th>
                        <th scope="col-sm">Nombre del cliente</th>
                        <th scope="col-sm">ID Vendedor</th>
                        <th scope="col-sm">Nombre del vendedor</th>                                
                        <th scope="col-sm">Valor Venta</th> 
                        <th scope="col-sm">Estado</th>
                        <th scope="col-sm">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {listaVentas.map((venta) =>{
                        return(
                            <tr key={nanoid()}>
                                <th scope="row">{venta.idVenta}</th>
                                <td>{venta.descripcionVenta}</td>
                                <td>{venta.cantidad}</td>
                                <td>{venta.fechaVenta}</td>
                                <td>{venta.idCliente}</td>
                                <td>{venta.nombreCliente}</td>
                                <td>{venta.idVendedor}</td>
                                <td>{venta.nombreVendedor}</td>
                                <td>{venta.valorVenta}</td>
                                <td className={venta.alerta}>{venta.estado}</td>

                                <td className="iconos">
                                    <button className="btn far fa-edit bg-info"></button>

                                    <button className="btn far fa-trash-alt bg-danger ml-1"></button>
                                </td>
                            </tr>
                        )
                    })}    
                </tbody>
            </table>
        </div>
    )
}

export default DataVentas

