import React from 'react';
import { Link } from 'react-router-dom';
import ImagenLogoNegro from 'components/ImagenLogoNegro';
/* import { useAuth0 } from "@auth0/auth0-react"; */

const Login = () => {
    return (
      <div className='h-screen '>  
        <div className='w-full'>
          <ImagenLogoNegro></ImagenLogoNegro>
        </div>
        <div className='max-w-md mx-auto w-full'>
          <button
            type='submit'
            className='group relative w-full py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-novablue hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500'
          >
            <Link to='/Home' className="text-white">Ingresar</Link>
          </button>
        </div>
      </div>
      );
    };
    
    export default Login;