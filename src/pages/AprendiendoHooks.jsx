import React, {useState,useEffect} from 'react'

const AprendiendHooks2 = () => {
    
    const [Edad, setEdad] = useState(0);
    const [EsMenorDeEdad, setEsMenorDeEdad] = useState(false);
    const [MostrarCamposAdicionales, setMostrarCamposAdicionales] = useState(false);

    useEffect(() => {
        if(Edad >= 18){
            setEsMenorDeEdad(false)
        }else{
            setEsMenorDeEdad(true)
        }
    }, [Edad]);

    return (
        <form>
            <h2>Formulario de prueba</h2>
            <label htmlFor="Edad">
                Por favor ingrese su edad
                <input value={Edad} onChange={(e)=>{setEdad(e.target.value)}} name='edad' type="number" />
            </label>
            {
                //Formato para hacer un if con sintaxis reducida
                EsMenorDeEdad ? (
                <span className="bg-danger">Es menor de edad</span>
                ) : (
                <span className="bg-success">Es mayor de edad</span> 
            )}
            
            <button onClick={()=>setMostrarCamposAdicionales(!MostrarCamposAdicionales)} type="button" className="btn ml-3">Mostrar campos adicionales</button>
            
            {
                //Formato para hcer un if que solo tiene un estado (no else)
                MostrarCamposAdicionales && (
                    <div>
                        <input type="text" className="input" placeholder="Ingrese su nombre" />
                        <input type="text" className="input" placeholder="Ingrese su nombre" />
                        <input type="text" className="input" placeholder="Ingrese su nombre" />
                    </div>
                )
            }
        </form>
    )
}

export default AprendiendHooks2
