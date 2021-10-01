import React from 'react'
import 'App.css'

const Ventas = () => {
    return (
        <div>
            <h2>REGISTRO DE VENTAS</h2>
            <div className="container-fluid">
                <div className="row align-items-center  justify-content-center">
                    <div className="col-md-2">
                        <div className="row align-items-center  justify-content-center">
                            <label className="form-label">ID Venta</label>
                        </div>   
                        <div className="row align-items-center  justify-content-center">
                            <div className="col-md-11">
                                <input type="number" className="form-control" required/>    
                            </div>
                        </div>
                    </div>
                    <div class="col-md-2">
                        <div className="row align-items-center  justify-content-center">
                            <label className="form-label">Fecha Venta</label>
                        </div>   
                        <div className="row align-items-center  justify-content-center">
                            <div className="col-md-11">
                                <input type="date" className="form-control" required/>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="row align-items-center  justify-content-center">
                            <label className="form-label">Cliente</label>
                        </div>   
                        <div className="row align-items-center  justify-content-center">
                            <div className="col-md11">
                                <input type="text" className="form-control" required/>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-2">
                        <div className="row align-items-center  justify-content-center">
                            <label className="form-label">ID Cliente</label>
                        </div>   
                        <div className="row align-items-center  justify-content-center">
                            <div className="col-md-11">
                            <input type="number" className="form-control" required/>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="row align-items-center  justify-content-center">
                            <label className="form-label">Vendedor</label>
                        </div>   
                        <div className="row align-items-center  justify-content-center">
                            <div className="col-md-11">
                                <input type="text" className="form-control" required/>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="row align-items-center  justify-content-center">
                            <label className="form-label">ID Vendedor</label>
                        </div>   
                        <div className="row align-items-center  justify-content-center">
                            <div className="col-md-11">
                                <input type="number" className="form-control" required/>
                            </div>
                        </div>
                    </div>
                </div>                
            </div>

            <h3>Agregar Producto</h3>
            <div className="container">
                <div className="row align-items-center  justify-content-center">
                    <div className="col-md-8">
                        <div className="row align-items-center  justify-content-left">
                            <div className="col-md-3">
                                <label className="form-label">ID Producto</label>
                            </div>
                            <div className="col-md-3">
                                <label className="form-label">Descripción</label>
                            </div>
                            <div className="col-md-3">
                                <label className="form-label">Cantidad</label>
                            </div>
                        </div>   
                    </div>
                    <div className="col-md-8">
                        <div className="row align-items-center  justify-content-center">
                            <div className="col-md-3">
                                <input type="number" className="form-control" required/>
                            </div>
                            <div className="col-md-3">
                                <input type="text" className="form-control" required/>
                            </div>
                            <div className="col-md-3">
                                <input type="number" className="form-control" required/>
                            </div>
                            <div className="col-md-3">
                                <button type="button" class="btn btn-primary"><i className="fas fa-plus"></i> Agregar</button>
                            </div>
                        </div>   
                    </div>
                </div>
            </div>
            <h3>Descripción de Venta</h3>
            <div className="container">
                <div className="col-md-11">
                    <table class="table table-hover">
                        <thead>
                            <tr>
                                <th scope="col">ID Producto</th>
                                <th scope="col">Descripción</th>
                                <th scope="col">Cantidad</th>
                                <th scope="col">Valor Unitario</th>
                                <th scope="col">Subtotal</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>00123</td>
                                <td>Adidas Stan Smith</td>
                                <td>12</td>
                                <td>229900</td>
                                <td>2435321</td>
                            </tr>
                            <tr>
                                <td>00123</td>
                                <td>Adidas Stan Smith</td>
                                <td>12</td>
                                <td>229900</td>
                                <td>2435321</td>
                            </tr>
                            <tr>
                                <td>00123</td>
                                <td>Adidas Stan Smith</td>
                                <td>12</td>
                                <td>229900</td>
                                <td>2435321</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            {/* FILA PARA VISUALIZAR EL VALOR TOTAL Y CONFIRMAR LA VENTA */}
            <div className="container-fluid form-footer">
                <div className="row align-items-center">
                    <div className="col-md-4">
                        <span>
                            Valor total
                        </span>
                    </div>
                    <div className="col-md-4">
                        3456998231
                    </div>
                    <div className="col-md-4">
                        <button type="button" class="btn btn-primary">Confirmar</button>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Ventas
