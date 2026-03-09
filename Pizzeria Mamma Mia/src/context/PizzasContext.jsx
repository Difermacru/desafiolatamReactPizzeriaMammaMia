import { createContext, useEffect, useState } from "react";

export const PizzasContext = createContext();

export function PizzasProvider({ children }) {
    const [pizzas, setPizzas] = useState([]);
    const [pizzaSeleccionada, setPizzaSeleccionada] = useState(null);
    const [loading, setLoading] = useState(false);

    const urlBase = "http://localhost:5000/api/pizzas";

    // Traer todas las pizzas
    const getPizzas = async () => {
        try {
            setLoading(true);
            const response = await fetch(urlBase);
            const data = await response.json();
            setPizzas(data);
        } catch (error) {
            console.error("Error al obtener las pizzas:", error);
        } finally {
            setLoading(false);
        }
    };

    // Traer una pizza por id
    const getPizzaById = async (id) => {
        try {
            setLoading(true);
            const response = await fetch(`${urlBase}/${id}`);
            const data = await response.json();
            setPizzaSeleccionada(data);
        } catch (error) {
            console.error("Error al obtener la pizza:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getPizzas();
    }, []);

    return (
        <PizzasContext.Provider
            value={{
                pizzas,
                pizzaSeleccionada,
                loading,
                getPizzas,
                getPizzaById,
            }}
        >
            {children}
        </PizzasContext.Provider>
    );
}