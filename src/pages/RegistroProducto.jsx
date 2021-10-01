import React, { Fragment } from 'react'



const RegistroProductos=()=>{


    return(
      
<div className="content-general">
<div className="content-producto">  
<h4 className="titulo-form-producto">Registro de Productos</h4>
    <Fragment>
    <form className="row">
      <div className="col-md-12">
        <label>Identificador de Producto</label>
        <input required className="form-control" placeholder="Identificador del Producto">
        </input>
      </div>
      <div className="col-md-12">
      <label>Descripción del producto</label>
        <textarea  required  className="form-control"  placeholder=" Descripción del Producto">
        </textarea>
      </div>
      <div className="col-md-12">
      <label >$ Valor Unitario</label>
        <input required type="number"className="form-control" placeholder="Valor unitario" >  
        </input>
      </div>
      <div className="col-md-12">
      <label >Estado del producto</label>
      <select required  className="form-control"  >
        <option  disabled selected>Estado del producto</option>
        <option value="1">Disponible</option>
        <option value="2">No disponible</option>
        </select>
      </div>
      <div className="col-md-6">
        <button id="btn-registrar" className="btn btn-primary" type="submit">Registrar
        </button>
      </div>
         </form>
    </Fragment>
    
</div>
</div>        
    )
}
export default RegistroProductos

