import React, {useState,useEffect} from 'react'

const VehiculosBackend = [
    {
        nombre:"Corolla",
        marca:"Toyota",
        modelo:2014,
    },
    {
        nombre:"Sandero",
        marca:"Renault",
        modelo:2020,
    },
    {
        nombre:"Rav4",
        marca:"Toyota",
        modelo:2021,
    },
    {
        nombre:"Fiesta",
        marca:"Ford",
        modelo:2017,
    },
    {
        nombre:"Mazda 3",
        marca:"Mazda",
        modelo:2020,
    }
]


const AprendiendoHooks2 = () => {

    const [mostrarTabla, setMostrarTabla] = useState(true);
    const [vehiculos, setVehiculos] = useState([]);
    const [mostrarTextoBoton, setmostrarTextoBoton] = useState('');

    useEffect(() => {
        //Obtiene los datos desde el backend
        setVehiculos(VehiculosBackend)
    }, []);

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

            {mostrarTabla ? <TablaVehiculos listaVehiculos={vehiculos} /> : <FormularioDeCreacion />}
        </div>
    )
}

const TablaVehiculos = ({listaVehiculos}) =>{
    useEffect(() => {
        console.log(listaVehiculos)
    }, [listaVehiculos]);
    return(
        <table className="table">
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Marca</th>
                    <th>Modelo</th>
                </tr>
            </thead>
            <tbody>
                {listaVehiculos.map((vehiculo)=>{
                    return(
                        <tr>
                            <td>{vehiculo.nombre}</td>
                            <td>{vehiculo.marca}</td>
                            <td>{vehiculo.modelo}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
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
