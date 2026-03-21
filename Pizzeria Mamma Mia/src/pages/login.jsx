import { useState, useContext } from "react";
import { UserContext } from "../context/userContext";
import { useNavigate } from "react-router-dom";

const Logear = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    //estado que valida los errores
    const [error, setError] = useState("");

    const { login } = useContext(UserContext); // 🔥 usamos contexto
    const navigate = useNavigate();

    //Función antes de enviar el formulario
    const loguear = async (e) => {
        e.preventDefault();

        //trim() quita espacios al inicio y final.
        //!nombre.trim() significa: “nombre está vacío” (o solo tenía espacios).
        if (!email.trim() || !password.trim()) {

            //Muestra una alerta avisando que todos los campos son obligatorios
            setError("Todos los campos son obligatorios");
            return;
        }

        try {
            await login({
                email: email.trim(),
                password: password.trim()
            });

            setError("");
            alert("Bienvenido a Pizzeria Mamma Mia 🍕");

            // redirige al perfil
            navigate("/");

            //se reinician los inputs
            setEmail('');
            setPassword('');

        } catch {
            setError("Email o contraseña incorrectos");
        }
    };

    return (
        <form className="container mt-4" onSubmit={loguear}>
            {error ? <p className="error">{error}</p> : null}
            <div className="row justify-content-center">
                <div className="col-12 col-md-6 col-lg-4">

                    <h1 >Inicio de sesion</h1>

                    <div className="form-floating mt-3 mb-3">
                        <input
                            type="email"
                            className="form-control"
                            onChange={(e) => setEmail(e.target.value)}
                            id="floatingInput"
                            placeholder="name@example.com"
                            value={email}
                        />
                        <label htmlFor="floatingInput">Email address</label>
                    </div>

                    <div className="form-floating mb-3">
                        <input
                            type="password"
                            className="form-control"
                            onChange={(e) => setPassword(e.target.value)}
                            id="floatingPassword"
                            placeholder="Password"
                            value={password}
                        />
                        <label htmlFor="floatingPassword">Password</label>
                    </div>

                    <button type="submit" className="btn btn-lg btn-dark w-100">Iniciar sesion</button>

                </div>
            </div>
        </form>
    );
};

export default Logear
