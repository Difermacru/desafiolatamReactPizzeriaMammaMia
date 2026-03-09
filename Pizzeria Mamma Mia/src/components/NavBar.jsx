import { Link } from "react-router-dom";
import { miles } from "../helpers/miles";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function NavBar() {
  const token = false;

  // Obtiene el carrito desde el context
  const { cart } = useContext(CartContext);

  // Calcula el total sumando precio por cantidad de cada pizza
  const total = cart.reduce((acumulador, pizza) => {
    return acumulador + pizza.price * pizza.quantity;
  }, 0);


  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Pizzeria Mamma Mia!
          </a>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">

            <form className="container-fluid justify-content-start">
              <Link
                className="btn btn-outline-light  me-2"
                type="button"
                to="/"
              >
                Home
              </Link>

              {token ? (
                <>
                  <button className="btn btn-outline-light  me-2" type="button">
                    Profile
                  </button>

                  <Link
                    className="btn btn-outline-light  me-2"
                    type="button"
                    to="/login"
                  >
                    Logout
                  </Link>
                </>

              ) : (

                <>
                  <Link
                    className="btn btn-outline-light  me-2"
                    type="button"
                    to="/login"
                  >
                    Login
                  </Link>

                  <Link
                    className="btn btn-outline-light  me-2"
                    type="button"
                    to="/register"

                  >
                    Register
                  </Link>

                  <Link className="btn btn-outline-light me-2" to="/profile">
                    Profile
                  </Link>
                </>
              )}

            </form>

            <form className="d-flex">
              <Link
                className="btn btn-sm btn-outline-secondary"
                type="button"
                to="/cart"
              >
                Total : ${miles(total)}
              </Link>
            </form>

          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
