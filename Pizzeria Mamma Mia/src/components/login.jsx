import { useState } from "react";

const Register = () => {

    const [email, setEmail]= useState('');
    const [password, setPassword]= useState('');

    //estado que valida los errores
    const [error, setError] = useState("");

    const EMAIL_OK = "admin@pizza.com";
    const PASS_OK = "123456";

     //Función antes de enviar el formulario
    const loguear = (e) => {
        e.preventDefault();

        //trim() quita espacios al inicio y final.
        //!nombre.trim() significa: “nombre está vacío” (o solo tenía espacios).
        if (!email.trim() || !password.trim()) {

            //Muestra una alerta avisando que todos los campos son obligatorios
            setError("Todos los campos son obligatorios");
            return;
        }

        if (email.trim() !== EMAIL_OK  || password.trim() !== PASS_OK) {
            setError("Contraseña o email incorrectos");
            return;
        }

        // Si el formulario se envía correctamente devolvemos todos nuestros estados al inicial y reseteamos el formulario
        setError("");
        alert("Bienvenido a Pizzeria Mamma Mia");

        setEmail('');
        setPassword('');
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

export default Register;
