import React from 'react';
import 'styles/Home.css';
import ImagenLogoNegro from 'components/ImagenLogoNegro';

const Home = () => {
    return (
            <div className="container-home">
                <ImagenLogoNegro></ImagenLogoNegro>
                <hr className="border border-gray-400"></hr>
                <h2 ClassName="bienvenido">Bienvenido</h2>
            </div>        
      );
    };
    
    export default Home;