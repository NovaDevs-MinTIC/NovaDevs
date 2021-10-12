import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";


const Login = () => {
  const { loginWithRedirect } = useAuth0();
    return (
      <div>  
        <div className='max-w-md w-full space-y-8'>
          <form className='mt-8 space-y-6'>
            <input type='hidden' name='remember' defaultValue='true' />
            <div>
              <Link to='/home'>
                <button
                  type='submit'
                  className='group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-novablue hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500'
                  onClick={() => loginWithRedirect()}
                >
                  <span>Ingresar</span>
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
      );
    };
    
    export default Login;