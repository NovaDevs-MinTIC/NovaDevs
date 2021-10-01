import React from 'react';
import LoginFormItem from 'components/LoginFormItem';
import Logo from 'media/logo.png'

const Login = () => {
    return (
        <div className="w-100 p-3">
            <img src={Logo} alt="" className="rounded mx-auto d-block"/>
            <h3>Iniciar Sesión</h3>
                <div className="row justify-content-center m-3">
                    <form className="column">
                        <LoginFormItem type="email" dato="Usuario" className="col-md-12" />
                        <LoginFormItem type="password" dato="Contraseña" className="col-md-12"/>
                        <div className="d-inline p-2 justify-content-center">
                            <button type="button" className="btn btn-primary m-3"><i className="fas fa-sign-in-alt"></i> Iniciar Sesión</button>
                    </div>
                    </form>
                </div>
        </div>
      );
    };
    
    export default Login;