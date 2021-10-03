import React, {useState,useEffect} from 'react'

const ProductoBackend = [
    {
        idProducto:1010,
        descripcionProducto:"Adidas Stan Smith",
        valorUnitario:250000,
        alerta:"bg-warning",
        estado:"No Disponible"
    },
    {
        idProducto:2020,
        descripcionProducto:"Adidas Ultra Boost",
        valorUnitario:265000,
        alerta:"bg-success",
        estado:"Disponible"
    },
    {
        idProducto:3030,
        descripcionProducto:"Nike Stefan Janoski",
        valorUnitario:300000,
        alerta:"bg-warning",
        estado:"No Disponible"
    }
]

//Contacto con la base de datos
const DataProducto = () => {
    
    const [producto, setProducto] = useState([]);

    useEffect(() => {
        setProducto(ProductoBackend)
    }, []);

    return(
        <TablaProductos listaProductos={producto} />
    );
}

//tabla SIN contenedores
const TablaProductos = ({listaProductos}) =>{
    
    return (
        <div className="contenedor-tabla-producto">
        <table className="table table-hover">
            <thead>
                <tr>
                    <th scope="col-sm">ID Producto</th>
                    <th scope="col-sm">Descripción del producto</th>                                
                    <th scope="col-sm">Valor Unitario</th> 
                    <th scope="col-sm">Estado</th>
                    <th scope="col-sm">Acciones</th>
                </tr>
            </thead>
            <tbody>
                {listaProductos.map((producto) =>{
                    return(
                        <tr>
                            <th scope="row">{producto.idProducto}</th>
                            <td>{producto.descripcionProducto}</td>
                            <td>{producto.valorUnitario}</td>
                            <td className={producto.alerta}>{producto.estado}</td>

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

export default DataProducto
