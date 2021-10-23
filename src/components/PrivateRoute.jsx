import React, {useEffect} from 'react'
import { useAuth0 } from '@auth0/auth0-react'


const PrivateRoute = ({children}) => {
    const {isAuthenticated, isLoading, loginWithRedirect, getAccessTokenSilently} = useAuth0();

    useEffect(() => {
        const fetchAuth0Token = async () => {
            const accessToken = await getAccessTokenSilently({
                audience: `api-autenticacion-novadevs`,
        });
        console.log(accessToken)
    };
        fetchAuth0Token()
    }, []);

    if(isLoading) return <div>Cargando...</div>;

    if (!isAuthenticated){
        return loginWithRedirect();  
    }

    return(
        <>
            {children};
        </>
    )
}

export default PrivateRoute
