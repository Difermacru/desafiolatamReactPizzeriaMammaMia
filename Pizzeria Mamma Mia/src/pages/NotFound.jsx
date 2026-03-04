import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="container py-5 text-center">
      <h1 className="display-4">404 🍕</h1>
      <p className="lead">Esta ruta no existe... se la comieron.</p>

      <Link to="/" className="btn btn-dark">
        Volver al Home
      </Link>
    </div>
  );
}