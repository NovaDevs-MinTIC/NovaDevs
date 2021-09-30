import Buscadores from 'components/Buscadores'
import React from 'react'
import DataVentas from 'components/DataVentas'


const BuscarActualizarVentas = () => {
    return (
        <div className="container-sm container-fluid">
            <div className="container">
                <h1 className="h1__titBuscarActulizarVentas mt-2">
                    Editar y actualizar estado de venta
                </h1>
            </div>

            <div className="container">
                <div className="input-group mb-3">
                    <Buscadores texto="Id de la venta" />
                    <Buscadores texto="Id del cliente" />    
                    <button type="button align-right" className="btn btn-light mb-3 ml-3 col col inline " aria-pressed="false">Buscar Venta</button>
                </div>
            </div>

            <div className="container container-sm">
                <div className="table-responsive">
                    <table className="table table-hover">
                        <thead className="thead-dark thead-rounded text-center">
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
                        <DataVentas />
                    </table>
                </div>
            </div>
            <div className="container mt-3 d-flex flex-row-reverse">
                <button className="btn">Regresar</button>
            </div>

        </div>
    )
}

export default BuscarActualizarVentas
