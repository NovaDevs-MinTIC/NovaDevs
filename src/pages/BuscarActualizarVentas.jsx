import Buscadores from 'components/Buscadores'
import React from 'react'
import DataVentas from 'components/DataVentas'


const BuscarActualizarVentas = () => {
    return (
        <div className="container-sm container-fluid">
            <h1 className="h1__titBuscarActulizarVentas mt-2">
                Editar y actualizar estado de venta
            </h1>

            <div className="container">
                <div className="input-group mb-3">
                    <Buscadores texto="Id de la venta" />
                    <Buscadores texto="Id del cliente" />    
                    <button type="button align-right" className="btn btn-light mb-3 ml-3 col col inline " aria-pressed="false">Buscar Venta</button>
                </div>
            </div>

            <div className="container container-xl">
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
                        <tbody>
                            <DataVentas ID_venta={"12323234"} descripcion_venta={"Controlador remoto ar5"} cantidad={15} fecha_de_venta={"15/5/2005"} ID_cliente={12123332} nombre_del_cliente={"Julio alberto espinosa peña"} ID_vendedor={15132132} nombre_del_vendedor={"Mario julio rodriguez posada"} nombre_razon_social={44581} valor_venta={465220} alerta={"bg-danger"} estado={"Cancelada"} />
                            <DataVentas ID_venta={"12323234"} descripcion_venta={"Zapatos adidas naranjas con verde, de cuero sintetico"} cantidad={15} fecha_de_venta={"15/5/2005"} ID_cliente={12123332} nombre_del_cliente={"Julio alberto espinosa"} ID_vendedor={15132132} nombre_del_vendedor={"Mario julio rodriguez"} nombre_razon_social={44581} valor_venta={465220} alerta={"bg-info"} estado={"En proceso"} />
                            <DataVentas ID_venta={"12323234"} descripcion_venta={"Controlador remoto ar5"} cantidad={15} fecha_de_venta={"15/5/2005"} ID_cliente={12123332} nombre_del_cliente={"Julio alberto espinosa"} ID_vendedor={15132132} nombre_del_vendedor={"Mario julio rodriguez"} nombre_razon_social={44581} valor_venta={465220} alerta={"bg-success"} estado={"Entregada"} />
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default BuscarActualizarVentas
