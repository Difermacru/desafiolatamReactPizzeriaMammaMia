import { Link } from "react-router-dom";
import Header from "../components/Header";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";
import { PizzasContext } from "../context/PizzasContext";


function Home() {
  // Obtiene addToCart desde el context para poder agregar pizzas al carrito compartido
  const { addToCart } = useContext(CartContext);
  const { pizzas, loading } = useContext(PizzasContext);

  if (loading) return <p>Cargando pizzas...</p>;

  return (
    <div className="home">

      <Header />
      <div className="row">
        {pizzas.map((pizza) => (
          <div className="col-12 col-md-4 mb-3" key={pizza.id}>
            <div className="card h-100">
              <img
                src={pizza.img}
                className="card-img-top"
                alt="pizza"
              />

              <div className="card-body">
                <h5 className="card-title">{pizza.name}</h5>

                <ul className="list-group list-group-flush">
                  <li className="list-group-item">🍕 {pizza.ingredients.join(", ")}</li>
                </ul>
              </div>

              <ul className="list-group list-group-flush">
                <li className="list-group-item">Precio: {pizza.price}</li>
              </ul>

              <div className="card-body">
                <Link
                  className="btn btn-light me-2"
                  to={`/pizza/${pizza.id}`}
                >
                  Ver Mas
                </Link>

                {/* Al hacer clic llama a addToCart, que viene del context,
                    para agregar esta pizza al carrito compartido */}
                <Link href="#" className="btn btn-dark" onClick={() => addToCart(pizza)} >Añadir</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home