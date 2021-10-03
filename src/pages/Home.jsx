import React from 'react';
import Logo from 'media/logo.png'
import 'styles/Home.css';

const Home = () => {
    return (
            <div className="container-home">
                <div className="home-logo">
               <img src={Logo} alt="" className="logo-home"/>
               <hr></hr>
               <h2 ClassName="bienvenido">Bienvenido</h2>
             
               </div>
            </div>        
      );
    };
    
    export default Home;