import FormItem from 'components/FormItem';
import React from 'react';
import 'styles/ventas.css'

const RegistroVentas = () => {
    return (
        <div>
            <h2>REGISTRO DE VENTAS</h2>

            <div className="w-90 p-3">
                <form className="row g-3">
                    <FormItem type="number" dato="ID Venta" />
                    <FormItem type="date" dato="Fecha Venta" />
                    <FormItem type="text" dato="Cliente" />
                    <FormItem type="number" dato="Cédula o Nit" />
                    <FormItem type="text" dato="Vendedor" />
                    <FormItem type="number" dato="ID Vendedor" />
                </form>
            </div>

            <h3>Agregar Producto</h3>
            <div className="w-60 p-3 ">
                <form className="row g-3 justify-content-center">
                    <FormItem type="number" dato="ID Producto" />
                    <FormItem type="text" dato="Descripción" />
                    <FormItem type="number" dato="Cantidad" />
                    <div className="d-inline p-2">
                    <button type="button" className="btn btn-primary"><i className="fas fa-plus"></i> Agregar</button>
                    </div>
                </form>
            </div>
           

        </div>
    );
}

export default RegistroVentas
