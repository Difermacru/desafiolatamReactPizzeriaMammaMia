import { Link } from "react-router-dom";
import Header from "../components/Header";
//import CardPizza from "./CardPizza"
import { useEffect, useState } from "react"; // Importamos hooks

function Home() {

  // Guardamos la lista de pizzas (array)
  const [pizzas, setPizzas] = useState([]);

  // Función para consumir la API (trae TODAS las pizzas)
  const getPizzas = async () => {
    const res = await fetch("http://localhost:5000/api/pizzas");
    const data = await res.json();
    setPizzas(data);
  };

  // Se ejecuta 1 sola vez al montar el componente
  useEffect(() => {
    getPizzas();
  }, []);


  return (
    <div className="home">

      <Header />
      
      {/* <CardPizza />  */}

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
                  to="/pizza/p001" 
                >
                  Ver Mas
                </Link>

                <a href="#" className="btn btn-dark">Añadir</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home