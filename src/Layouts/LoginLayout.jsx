import React from 'react'
import ImagenLogoNegro from 'components/ImagenLogoNegro';

const LoginLayout = ({children}) => {
    return (
        <div className='h-screen flex flex-col items-center justify-center bg-gray-50 sm:px-6 lg:px-8'>
          <div className='max-w-md w-full h-1/2'>
            <ImagenLogoNegro></ImagenLogoNegro>
            {children}
          </div>
        </div>
      );
    };

export default LoginLayout
