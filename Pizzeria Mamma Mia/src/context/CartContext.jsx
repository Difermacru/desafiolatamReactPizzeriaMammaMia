import { createContext, useState } from "react";

// Crea el contexto del carrito para compartir datos entre componentes
export const CartContext = createContext();

// Crea el provider que envolverá la aplicación
export function CartProvider({ children }) {
    // Estado donde se guardan las pizzas agregadas al carrito
    const [cart, setCart] = useState([]);

    // Función para agregar una pizza al carrito
    const addToCart = (pizza) => {
        // Busca si la pizza ya existe en el carrito comparando por id
        const pizzaInCartIndex = cart.findIndex((item) => item.id === pizza.id);

        // Si la pizza ya existe, no la vuelve a guardar desde cero
        if (pizzaInCartIndex >= 0) {
            // Hace una copia del carrito actual
            const newCart = structuredClone(cart);

            // Aquí se usa quantity porque esa propiedad ya fue creada
            // antes, cuando la pizza se agregó por primera vez al carrito
            newCart[pizzaInCartIndex].quantity += 1;

            // Actualiza el carrito con la nueva cantidad
            setCart(newCart);
            return;
        }

        // Si la pizza no existe en el carrito, la agrega por primera vez
        setCart((prevState) => [
            ...prevState,
            {
                // Copia todas las propiedades originales de la pizza
                ...pizza,

                // Aquí nace quantity
                // No viene de la API ni del objeto original
                // esta propiedad se crea para guardar cuántas veces esa pizza ha sido agregada al carrito
                quantity: 1,
            },
        ]);
    };

    return (
        // Proveedor del contexto que comparte cart y sus funciones
        <CartContext.Provider
            value={{
                cart,
                setCart,
                addToCart
            }}
        >
            {/* Renderiza los componentes hijos dentro del provider */}
            {children}
        </CartContext.Provider>
    );
}

export default CartProvider;