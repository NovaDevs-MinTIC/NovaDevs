import React from 'react';
import Logo from 'media/logo.png'
import { Link } from 'react-router-dom';

const Login = () => {
    return (
            <div className="container-fluid">
                <div className="row justify-content-center row-fluid mt-5">
                    <div className="col-md-6">
                        {/* LOGO */}
                        <div className="row">
                            <img src={Logo} alt="" className="rounded mx-auto d-block"/>
                        </div>
                        <h3 class="text-center">Iniciar Sesión</h3>
                        {/* FORMULARIO DE INGRESO */}
                        <div className="row justify-content-center">
                            <label className="form-label">Usuario</label>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-md-6">
                                <input type="text" className="form-control" required/>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <label className="form-label">Contraseña</label>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-md-6">
                                <input type="password" className="form-control" required/>
                            </div>
                        </div>
                        {/* BOTON RECORDARME */}
                        <div className="row justify-content-center">
                            <div className="col-md-3">
                                <div className="form-check">
                                    <input className="form-check-input ml-1" type="checkbox"/>
                                    <label className="form-check-label px-0 ml-4">Recordarme</label>
                                </div>
                            </div>
                            {/* RECUPERAR CONTRASEÑA */}
                            <div className="col-md-3">
                                <Link to="#">Recuperar contraseña</Link>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <Link to="/Ventas">
                                <button type="button" className="btn btn-primary m-3">
                                    <i className="fas fa-sign-in-alt"></i> Iniciar Sesión
                                </button>
                            </Link>
                        </div>
                        <div className='row flex align-items-center justify-content-center col-md-12'>
                            <span className='mx-4'>------------------------</span>
                            <h4 className='text-center'>O</h4>
                            <span className='mx-4'>------------------------</span>
                        </div>
                        <div className="row justify-content-center align-items-center">
                            <i class="fab fa-google"></i>
                            <Link to="#">
                                <span className='mx-4'>Continúa con Google</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>        
      );
    };
    
    export default Login;