import { useNavigate } from "react-router-dom";

export default function Profile() {
  const navigate = useNavigate();

  // Puedes dejarlo fijo para cumplir el requisito
  const email = "usuario@correo.com";

  const cerrar = () => {
    navigate("/login");
  };

  return (
    <div className="container mt-4">
      <h2>Perfil</h2>
      <p>
        Email: <strong>{email}</strong>
      </p>

      <button className="btn btn-dark" onClick={cerrar}>
        Cerrar sesión
      </button>
    </div>
  );
}