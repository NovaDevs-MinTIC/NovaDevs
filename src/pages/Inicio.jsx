import React from 'react';
import Logo from 'media/logo.png'
import { Link } from 'react-router-dom';

const Inicio = () => {
    return (
            <div className="">
                        <div className="content-general-2">
                            <img src={Logo} alt="" className="Logo_2"/>
                            <h1>BIENVENIDO</h1>
                </div>
            </div>        
      );
    };
    
    export default Inicio;