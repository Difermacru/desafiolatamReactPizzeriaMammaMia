import { useState } from "react";
import "../cart.css"
import { pizzaCart } from "../pizzas";
const Cart = () => {
    const [cardPizza, setCardPizza] = useState(pizzaCart);

    const MIN_ITEMS = 1;

    function incrementarCantidad(id) {
        // 1) Creamos un NUEVO arreglo usando .map() y recorre cada elemento del arreglo "cardPizza" y devuelve un arreglo nuevo con la misma cantidad de elementos.
        // "item" representa el elemento actual del arreglo en esta vuelta del map. Ejemplo: item = { id: 3, name: 'Margarita', price: 9000, count: 1, ... }
        const actualizarCantidad = cardPizza.map((item) => {
            // 2) Verificamos si el item actual es el que queremos modificar, Comparamos el id del item con el id que nos pasaron a la función.
            if (item.id === id) {
                //3) Si coincide, devolvemos un NUEVO objeto actualizado Aquí usamos el "spread operator" (...item) para COPIAR todas las propiedades
                // que ya tenía el item (id, name, price, img, etc.) y después actualizamos SOLO la propiedad "count".
                return {
                    ...item,
                    count: item.count + 1,
                };
            }
            //4) Si NO coincide, devolvemos el item tal cual (sin cambios)
            return item;
        });
        //5) Actualizamos el estado con el nuevo arreglo ya modificado setCardPizza reemplaza el estado antiguo por "actualizarCantidad"
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

    //Calculamos el total a pagar sumando: price * count de cada pizza; 
    // acumulador: va guardando la suma total y pizza: es cada elemento del arreglo cardPizza en esta vuelta
    const totalPagar = cardPizza.reduce((acumulador, pizza) => {

        // Sumamos al acumulador el subtotal de esta pizza (precio * cantidad)
        return acumulador + pizza.price * pizza.count;
    }, 0); // 0 es el valor inicial del acumulador

    return (
        <>
            <h1>Detalles del pedido:</h1>
            {/* Contenedor flex de Bootstrap para centrar la tabla horizontalmente en la pantalla */}
            <div className="d-flex justify-content-center">
                {/* 
                    Tabla con estilos Bootstrap:
                    - "table": aplica estilos base (espaciado, tipografía, etc.)
                    - "w-auto": la tabla toma solo el ancho que necesita (no se estira al 100%)
                */}
                <table className="table w-auto">
                    <tbody>
                        {cardPizza.map((pizza, index) => (
                            <tr key={index}>
                                <td>
                                    <img src={pizza.img} alt="pizza1" />
                                </td>

                                <td className="fw-bold">{pizza.name}</td>

                                {/* 
                                    Celda 3: contiene el precio en negrita
                                    - "ps-5": agrega padding hacia el inicio (izquierda) para desplazar el contenido hacia la derecha
                                */}
                                <td className="fw-bold ps-5">{pizza.price}</td>

                                {/* 
                                    Celda 4: contiene los botones de cantidad
                                    - "align-items-start": alinea el contenido al inicio en el eje vertical
                                    - "gap-4": agrega separación entre elementos hijos (los botones)
                                */}
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


