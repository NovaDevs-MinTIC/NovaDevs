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

const DataVentas = () => {
    
    const [venta, setVenta] = useState([]);

    useEffect(() => {
        setVenta(VentaBackend)
    }, []);

    return(
        <CamposTbody listaVentas={venta} />
    );
}

const CamposTbody = ({listaVentas}) =>{
    
    const [editar, setEditar] = useState(false);

    useEffect(() => {
        console.log(listaVentas)
        
    }, []);
    
    return (
        <tbody>
            {listaVentas.map((venta) =>{
                return(
                    <tr>
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
                            <button onClick={()=>{
                                setEditar(!editar)
                            }} className="btn far fa-edit bg-info rounded"></button>

                            {editar && <TablaEditar/>}

                            <button className="fas fa-trash bg-danger border-0 rounded"></button>
                        </td>
                    </tr>
                )
            })}    
        </tbody>
    )
}

const TablaEditar =() =>{
    return(
        <div>hola</div>
    )
}

export default DataVentas

//formatear estilos[className={`btn mt-3 bg-${colorFormateado}`}]