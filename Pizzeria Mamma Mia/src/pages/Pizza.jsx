import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { PizzasContext } from "../context/PizzasContext";
import { CartContext } from "../context/CartContext";

export default function Pizza() {
    // Obtiene el id que viene en la URL, por ejemplo /pizza/p001
    const { id } = useParams();

    // Obtiene del context la pizza seleccionada, el loading y la función para buscar por id
    const { pizzaSeleccionada, getPizzaById, loading } = useContext(PizzasContext);

    // Obtiene addToCart para agregar la pizza al carrito
    const { addToCart } = useContext(CartContext);

    // Cada vez que cambie el id, consulta la pizza correspondiente
    useEffect(() => {
        getPizzaById(id);
    }, [id]);

    // Mientras carga la información
    if (loading) return <p>Cargando pizza...</p>;

    // Si no encuentra datos
    if (!pizzaSeleccionada) return <p>No se encontró la pizza.</p>;

    return (
        <div className="row">
            <div className="col-12 col-md-4 mb-3">
                <div className="card h-100">
                    <img
                        src={pizzaSeleccionada.img}
                        className="card-img-top"
                        alt={pizzaSeleccionada.name}
                    />

                    <div className="card-body">
                        <h5 className="card-title">{pizzaSeleccionada.name}</h5>

                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                🍕 {pizzaSeleccionada.ingredients.join(", ")}
                            </li>
                        </ul>
                    </div>

                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            Precio: {pizzaSeleccionada.price}
                        </li>
                    </ul>

                    <div className="card-body">
                        <button
                            className="btn btn-dark"
                            onClick={() => addToCart(pizzaSeleccionada)}
                        >
                            Añadir
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}