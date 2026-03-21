import { useContext, useState } from "react";
import "../cart.css";
import { CartContext } from "../context/CartContext";
import { UserContext } from "../context/userContext";

const Cart = () => {
    // Obtiene del contexto el carrito y la función para actualizarlo
    const { cart, setCart } = useContext(CartContext);
    const [success, setSuccess] = useState("");
    const { token } = useContext(UserContext);
    
    const MIN_ITEMS = 1;

    const handleCheckout = async () => {
        try {
            const response = await fetch("http://localhost:5000/api/checkouts", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify({ cart }),
            });

            if (!response.ok) {
                throw new Error("Error al procesar el pago");
            }

            setSuccess("Compra realizada con éxito ");

            // limpiar carrito
            setCart([]);

        } catch (error) {
            console.error(error);
            alert("Error al realizar la compra");
        }
    };

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

            {success && (
                <p className="text-success text-center fw-bold">
                    {success}
                </p>
            )}

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
                    disabled={!token}
                    onClick={handleCheckout}
                >
                    Pagar
                </button>
            </div>

        </>
    );
};

export default Cart;