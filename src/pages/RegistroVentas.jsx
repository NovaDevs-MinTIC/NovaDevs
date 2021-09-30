import React from 'react';
import 'styles/ventas.css'

const RegistroVentas = () => {
    return (
        <div>
            <h2>REGISTRO DE VENTAS</h2>
            <div className="formulario">
                <form action="">
                    <div className="row g-3">
                        <div className="col-auto" >
                            <label for="exampleFormControlInput1" class="form-label">ID Venta</label> 
                            <input type="text" placeholder="ID Venta" className="form-control"/>
                        </div>
                        <div className="col-auto">
                            <label for="exampleFormControlInput1" class="form-label">Fecha Venta</label> 
                            <input type="date" placeholder="Fecha Venta" className="form-control"/>
                        </div>
                    </div>
                    <div className="row g-3">
                        <div className="col-auto">
                            <label for="exampleFormControlInput1" class="form-label">Cliente</label>  
                            <input type="text" placeholder="Cliente" className="form-control"/>
                        </div>
                        <div className="col-auto">
                            <label for="exampleFormControlInput1" class="form-label">ID Cliente</label> 
                            <input type="number" placeholder="Cédula o NIT" className="form-control"/>
                        </div>
                        <div className="col-auto">
                            <label for="exampleFormControlInput1" class="form-label">ID Vendedor</label> 
                            <input type="number" placeholder="ID Vendedor" className="form-control"/>
                        </div>
                        <div className="col-auto">
                            <label for="exampleFormControlInput1" class="form-label">Vendedor</label> 
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
                        <div className="col-auto" >
                            <input type="number" placeholder="ID Producto" className="form-control"/>
                        </div>
                        <div className="col-4">
                            <input type="text" placeholder="Descripción" className="form-control"/>
                        </div>
                        <div className="col-auto">
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
                            <th scope="col">ID Producto</th>
                            <th scope="col">Descripción</th>
                            <th scope="col">Cantidad</th>
                            <th scope="col">Precio unitario</th>
                            <th scope="col">Subtotal</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <th scope="row">010012</th>
                        <td>ULTRABOOST 21</td>
                        <td>12</td>
                        <td>$799900</td>
                        </tr>
                        <tr>
                        <th scope="row">010321</th>
                        <td>Tennis Grand Court</td>
                        <td>15</td>
                        <td>$299900</td>
                        </tr>
                        <tr>
                        <th scope="row">010213</th>
                        <td>Tennis Stan Smith</td>
                        <td>8</td>
                        <td>$399900</td>
                        </tr>
                    </tbody>
                </table>
                <div className="confirmar">
                    <button type="button" class="btn btn-primary">Confirmar Venta</button>
                </div>
                
            </div>
        </div>
    );
}

export default RegistroVentas
