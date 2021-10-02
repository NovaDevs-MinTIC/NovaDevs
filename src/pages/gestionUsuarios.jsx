import Tabla from '../components/tablaUsuarios';
import "bootstrap/dist/css/bootstrap.min.css";
import '../styles/usuarios.css';
import React, {Fragment, useState} from "react"; 

const  Usuarios = () => {
    return(
        <div className="App">
          <h2 className="titulogestion">
            Gestión de Usuarios
            </h2>  
            <div className="row-usuarios">
              <form className="row">
              <div className= "col-md-4">
                <input
                  placeholder="Ingrese Email"
                  className="form-control"
                  type="email"
                ></input>
               </div>
              <div className= "col-md-4">
                <input
                placeholder="Ingrese Nombre"
                className="form-control"
                ></input>
              </div>
              <div className= "col-md-3">
                <button  className="btn btn-primary" type="submit" >Buscar</button>
              </div>   
            </form>
            </div>

            <form>
            <div className=" tabla container-xl">
              <div className="table-responsive">
                <table className="table table-hover">
                  <thead>
                    <tr>
                    <th>Correo Electrónico</th>
                    <th>Nombre</th>
                    <th>Rol</th>
                    <th>Estado</th>
                    </tr>
                 </thead>
                 <tbody>
                   <Tabla correo="luisforero12@gmail.com" nombre="Luis Forero"/>
                   <Tabla correo="carodiaz17@gmail.com" nombre="Carolina Díaz"/>
                   <Tabla correo="shr_1982@gmail.com" nombre="Alberto Vélez "/>
                   <Tabla correo="saranghe@gmail.com" nombre="Cielo López"/>
                  </tbody>

                 </table>
                    <div className="boton">
                   <button className="btn btn-success" type="submit">Guardar Cambios</button>
                 </div> 
                 </div>
                 </div> 
                 </form>
                 </div>
          )
}
export default Usuarios;