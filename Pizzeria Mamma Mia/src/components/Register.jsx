import { useState } from "react";

const Register = () => {

    const [email, setEmail]= useState('');
    const [password, setPassword]= useState('');
    const [confirmarPassword, setConfirmarPassword]= useState('');

    //estado que valida los errores
    const [error, setError] = useState("");

     //Función antes de enviar el formulario
    const validarDatos = (e) => {
        e.preventDefault();

        //trim() quita espacios al inicio y final.
        //!nombre.trim() significa: “nombre está vacío” (o solo tenía espacios).
        if (!email.trim() || !password.trim() || !confirmarPassword.trim()) {

            //Muestra una alerta avisando que todos los campos son obligatorios
            setError("Todos los campos son obligatorios");
            return;
        }

        //Validar largo mínimo de password (6 caracteres)
        if (password.trim().length < 6) {
            setError("La contraseña debe tener al menos 6 caracteres");
            return;
        }

        if(password !== confirmarPassword){
            //Muestra una alerta avisando que todos los campos son obligatorios
            setError("Elpassword y la confirmación del password deben ser iguales.");
            return;
        }

        // Si el formulario se envía correctamente devolvemos todos nuestros estados al inicial y reseteamos el formulario
        setError("");

        setEmail('');
        setPassword('');
        setConfirmarPassword('');
    };

  return (
    <form className="container mt-4" onSubmit={validarDatos}>
        {error ? <p className="error">{error}</p> : null}
        <div className="row justify-content-center">
            <div className="col-12 col-md-6 col-lg-4">

                <h1 >Crea una cuenta nueva</h1>

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

                <div className="form-floating mb-3">
                    <input
                        type="password"
                        className="form-control"
                        onChange={(e) => setConfirmarPassword(e.target.value)}
                        id="floatingPassword"
                        placeholder="Confirmar Password"
                        value={confirmarPassword}
                    />
                    <label htmlFor="floatingPassword">Confirmar Password</label>
                </div>

                <button type="submit" className="btn btn-lg btn-dark w-100">Registrarse</button>

            </div>
        </div>
    </form>
  );
};

export default Register;
