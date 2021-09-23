import logo from 'media/logo.png'
import logincss from 'styles/login.css'

const Login = () => {
    return(
        <>
            <div className="container">
                <div className="login-container">
                    <div className="login-items">
                        <h2>Iniciar sesión</h2>
                        <form action="">
                            <img src={logo} alt="" />
                            <input type="text" placeholder="Usuario"/>
                            <input type="text" placeholder="Contraseña"/>
                            <input type="submit" value="INGRESAR" id="login-btn"/>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;