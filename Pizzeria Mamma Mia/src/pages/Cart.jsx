import { useContext } from "react";
import "../cart.css";
import { CartContext } from "../context/CartContext";

const Cart = () => {
    // Obtiene del contexto el carrito y la función para actualizarlo
    const { cart, setCart } = useContext(CartContext);

    const MIN_ITEMS = 1;

    function incrementarCantidad(id) {
        const actualizarCantidad = cart.map((item) => {
            if (item.id === id) {
                return {
                    ...item,

                    // Se usa quantity porque esa propiedad fue creada
                    // en el context cuando la pizza se agregó al carrito
                    quantity: item.quantity + 1,
                };
            }
            return item;
        });

        // Actualiza el carrito que viene del context
        setCart(actualizarCantidad);
    }

    function decrementarCantidad(id) {
        const actualizarCantidad = cart.map((item) => {
            if (item.id === id) {
                return {
                    ...item,

                    // Se modifica quantity porque esa es la propiedad
                    // que el context guarda para la cantidad
                    quantity: item.quantity - 1,
                };
            }
            return item;
        })
         // Si la cantidad llega a 0, la elimina del carrito
        .filter((item) => item.quantity >= MIN_ITEMS);

        // Actualiza el carrito compartido del context
        setCart(actualizarCantidad);
    }

    const totalPagar = cart.reduce((acumulador, pizza) => {
        // cart viene del context y quantity también fue creada allí
        return acumulador + pizza.price * pizza.quantity;
    }, 0);

    return (
        <>
            <h1>Detalles del pedido:</h1>

            <div className="d-flex justify-content-center">
                <table className="table w-auto">
                    <tbody>
                        {cart.map((pizza) => (
                            <tr key={pizza.id}>
                                <td>
                                    <img src={pizza.img} alt="pizza1" />
                                </td>

                                <td className="fw-bold">{pizza.name}</td>

                                <td className="fw-bold ps-5">{pizza.price}</td>

                                <td>
                                    <button
                                        type="button"
                                        className="btn btn-dark"
                                        onClick={() => decrementarCantidad(pizza.id)}
                                    >
                                        -
                                    </button>

                                    {/* Muestra la cantidad que viene del context */}
                                    <span className="mx-3 fw-bold">{pizza.quantity}</span>

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
                </table>
            </div>

            <p className="text-center">
                Total pagar: <span className="fw-bold">${totalPagar}</span>
            </p>

            <div className="text-center">
                <button
                    type="button"
                    className="btn btn-dark"
                >
                    Pagar
                </button>
            </div>

        </>
    );
};

export default Cart;