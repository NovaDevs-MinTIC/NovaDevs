import React, {useState,useEffect} from 'react'

const AprendiendoHooks2 = () => {

    const [mostrarTabla, setMostrarTabla] = useState(true);
    const [mostrarTextoBoton, setmostrarTextoBoton] = useState('');

    useEffect(() => {
        if (mostrarTabla) {
            setmostrarTextoBoton("Crear nuevo vehiculo")
        } else {
            setmostrarTextoBoton("Mostrar todos los vehiculos")
        }
    }, [mostrarTabla]);

    return (
        <div className="container">
            <h2>Página de administración</h2>
            <button onClick={()=>{
                setMostrarTabla(!mostrarTabla)
                }} className="btn mt-3">{mostrarTextoBoton}</button>

            {mostrarTabla ? <TablaVehiculos /> : <FormularioDeCreacion />}
        </div>
    )
}

const TablaVehiculos = () =>{
    return(
        <div>Esto es un div que se convertirá en una tabla</div>
    )
}

const FormularioDeCreacion = () =>{
    return(
        <form action="">
            <div className="input-group d-flex flex-column mt-4 mb-3">
                <input className="input mb-2" type="text" />
                <input className="input mb-2" type="text" />
                <input className="input mb-2" type="text" />
            </div>
            <button className="btn mb-3 col-5">Guardar cambios</button>
        </form>
    )
}

export default AprendiendoHooks2
