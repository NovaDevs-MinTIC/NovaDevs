import Buscadores from 'components/Buscadores'
import React from 'react'
import DataProducto from 'components/DataProducto'


const gestionProducto = () => {
    return (
        <div className="contenedorProducto">
            
        <div className="container">

            {/*Título*/}
            <div className="container">
                <h1 className="h1__titgestionProducto mt-2">
                    Gestión de Productos
                </h1>
            </div>

            {/*Barras de búsqueda para la tabla*/}
            <div className="container">
                <div className="input-group mb-3">
                    <Buscadores texto="Id del Producto" />
                        
                    <button type="button align-right" className="btn btn-light mb-3 ml-3 col col inline " aria-pressed="false">Buscar Venta</button>
                </div>
            </div>

            {/*Contenedor de la tabla de Buscar y actualizar venta*/}
            <div className="container">
                <div className="table-responsive">
                    <DataProducto />
                </div>
            </div>
            
            {/*Botón Para regresar*/}
            <div className="container mt-3 mb-3 d-flex flex-row-reverse">
                <button type="button" className="btn">Regresar</button>
            </div>
        </div>
        </div>
    )
}

export default gestionProducto
