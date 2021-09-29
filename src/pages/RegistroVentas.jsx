import React from 'react';
import 'styles/ventas.css'

const RegistroVentas = () => {
    return (
        <div>
            <h2>REGISTRO DE VENTAS</h2>
            <div className="formulario">
                <form action="">
                    <div className="row">
                        <div className="col-md-6" >
                            <input type="text" placeholder="ID Venta" className="form-control"/>
                        </div>
                        <div className="col-md-6">
                            <input type="date" placeholder="Fecha Venta" className="form-control"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <input type="text" placeholder="Cliente" className="form-control"/>
                        </div>
                        <div className="col-md-6">
                            <input type="number" placeholder="Cédula o NIT" className="form-control"/>
                        </div>
                        <div className="col-md-6">
                            <input type="number" placeholder="ID Vendedor" className="form-control"/>
                        </div>
                        <div className="col-md-6">
                            <input type="text" placeholder="Nombre Vendedor" className="form-control"/>
                        </div>
                    </div>
                </form>
            </div>
            <div className="venta">
                <h3>Productos</h3>
                <div className="formulario">
                <form action="">
                    <div className="row">
                        <div className="col-md-3" >
                            <input type="number" placeholder="ID Producto" className="form-control"/>
                        </div>
                        <div className="col-md-3">
                            <input type="text" placeholder="Descripción" className="form-control"/>
                        </div>
                        <div className="col-md-3">
                            <input type="number" placeholder="Cantidad" className="form-control"/>
                        </div>
                        <button type="button" class="btn btn-primary">Agregar</button>
                    </div>
                    
                </form>
            </div>
                <h3>Descripción de la venta</h3>
                <table class="table">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Handle</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        </tr>
                        <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        </tr>
                        <tr>
                        <th scope="row">3</th>
                        <td colspan="2">Larry the Bird</td>
                        <td>@twitter</td>
                        </tr>
                    </tbody>
                </table>
                
            </div>
        </div>
    );
}

export default RegistroVentas
