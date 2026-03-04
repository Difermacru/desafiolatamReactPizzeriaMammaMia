import { useState } from "react";
import "../cart.css"
import { pizzaCart } from "../pizzas";

const Cart = () => {
    const [cardPizza, setCardPizza] = useState(pizzaCart);

    const MIN_ITEMS = 1;

    function incrementarCantidad(id) {
        const actualizarCantidad = cardPizza.map((item) => {
            if (item.id === id) {
                return {
                    ...item,
                    count: item.count + 1,
                };
            }
            return item;
        });
        setCardPizza(actualizarCantidad);
    }

    function decrementarCantidad(id) {
        const actualizarCantidad = cardPizza.map((item) => {
            if (item.id === id && item.count > MIN_ITEMS) {
                return {
                    ...item,
                    count: item.count - 1,
                };
            }
            return item;
        });
        setCardPizza(actualizarCantidad);
    }

    const totalPagar = cardPizza.reduce((acumulador, pizza) => {
        return acumulador + pizza.price * pizza.count;
    }, 0);

    return (
        <>
            <h1>Detalles del pedido:</h1>

            <div className="d-flex justify-content-center">

                <table className="table w-auto">
                    <tbody>
                        {cardPizza.map((pizza, index) => (
                            <tr key={index}>
                                <td>
                                    <img src={pizza.img} alt="pizza1" />
                                </td>

                                <td className="fw-bold">{pizza.name}</td>

                                <td className="fw-bold ps-5">{pizza.price}</td>

                                <td className="flex align-items-start gap-4">
                                    <button
                                        type="button"
                                        className="btn btn-dark"
                                        onClick={() => decrementarCantidad(pizza.id)}
                                    >
                                        -
                                    </button>
                                    <span className="mx-3 fw-bold">{pizza.count}</span>
                                    <button
                                        type="button"
                                        className="btn btn-dark"
                                        onClick={() => incrementarCantidad(pizza.id)}
                                    >
                                        +
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                    
                    <p className="text-end">
                        Total pagar: <span className="fw-bold">${totalPagar}</span>
                    </p>

                    <button
                        type="button"
                        className="btn btn-dark"
                    >
                        Pagar
                    </button>
                </table>
            </div>
        </>
    );
};

export default Cart;


