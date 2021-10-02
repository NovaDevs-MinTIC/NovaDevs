import Buscadores from 'components/Buscadores'
import React from 'react'
import DataVentas from 'components/DataVentas'


const BuscarActualizarVentas = () => {
    return (
        <div className="container-sm container-fluid">
                {/*Título*/}
                <div className="container-sm container-fluid">
                    <h1 className="h1__titBuscarActulizarVentas mt-2">
                        Estado de venta
                    </h1>
                </div>

                {/*Barras de búsqueda para la tabla (Cuestionandome donde debería ser posicionado*/}
                <div className="container-sm container-fluid">
                    <div className="input-group mb-3">
                        <Buscadores texto="Id de la venta" />
                        <Buscadores texto="Id del cliente" />    
                        <button type="button align-right" className="btn btn-light mb-3 ml-3 col col inline " aria-pressed="false">Buscar Venta</button>
                    </div>
                </div>

                {/*Contenedor de la tabla de Buscar y actualizar venta*/}
                <div className="container-sm container-fluid">
                    <div className="table-responsive">
                        <DataVentas />
                    </div>
                </div>
                
                {/*Botón Para regresar*/}
                <div className="container-sm container-fluid mt-3 mb-3 d-flex flex-row-reverse">
                    <button type="button" className="btn">Regresar</button>
                </div>
        </div>
    )
}

export default BuscarActualizarVentas
