import { pizzas } from "../pizzas";
import { useState } from "react";

const CardPizza = () => {
    const [listaPizzas, setListaPizas] = useState(pizzas)

    return (
        <div className="row">
            {listaPizzas.map((pizza, index) => (
                <div className="col-12 col-md-4 mb-3" key={index}>
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
                            <a href="#" className="btn btn-light me-2">Ver Mas</a>
                            <a href="#" className="btn btn-dark">Añadir</a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CardPizza;


