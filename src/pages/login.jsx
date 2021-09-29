import React from 'react';
import { Link } from 'react-router-dom';
import 'styles/login.css';

const Login = () => {
    return (
        <div className="container">
        <div className="login-container">
            <div className="login-items">
                <img src='logo.png' alt="" />
                <h2>Iniciar sesión</h2>
                <form action="">
                    <input type="text" placeholder="Usuario"/>
                    <input type="text" placeholder="Contraseña"/>
                    <input type="submit" value="INGRESAR" id="login-btn"/>
                    <p><Link>¿Olvidaste tu Contraseña?</Link></p>
                </form>
            </div>
        </div>
        </div>
      );
    };
    
    export default Login;