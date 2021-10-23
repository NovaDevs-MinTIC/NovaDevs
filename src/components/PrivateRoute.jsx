//  import React, {useEffect} from 'react'
//  import { useAuth0 } from '@auth0/auth0-react'

//  const PrivateRoute = ({children}) => {
//      const {isAuthenticated, isLoading, loginWithRedirect, getAccessTokenSilently} = useAuth0()
//      if(isLoading) return <div>Cargando...</div>

//      if (!isAuthenticated){
//          return loginWithRedirect();  }
     
//      return(
//          <>
//              {children};
//          </>
//      )
//      }
//  export default PrivateRoute
import { useUser } from 'context/userContext';
import React from 'react';

const PrivateRoute = ({ roleList, children }) => {
  const { userData } = useUser();

  if (roleList.includes(userData.rol)) {
    return children;
  }

  return <div className='text-9xl text-red-500 '>No estás autorizado para ver este sitio.</div>;
};

export default PrivateRoute;
