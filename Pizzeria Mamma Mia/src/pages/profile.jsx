import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/userContext"

export default function Profile() {

  const { email, logout, getProfile } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    getProfile(); //Trae el usuario real
  }, []);

  const cerrar = () => {
    logout();
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