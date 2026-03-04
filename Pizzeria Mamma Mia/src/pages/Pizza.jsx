import { useEffect, useState } from "react"; // Importamos hooks

export default function Pizza() {

    // Estado inicial con la estructura de una pizza.
    // Evita errores mientras la API carga, porque las propiedades ya existen.
    // Luego setPizzas(data) reemplaza estos valores con los datos reales.
    const [pizza, setPizza] = useState({
        id: "",
        img: "",
        name: "",
        ingredients: [],
        price: 0,
    }); // Estado para guardar el arreglo de pizzas

    // Función que consulta la API
    const getPizza = async () => {
        const res = await fetch("http://localhost:5000/api/pizzas/p001"); // Petición a la API
        const data = await res.json(); // Convertimos la respuesta a JSON
        setPizza(data); // Guardamos los datos en el estado
    };

    // useEffect para ejecutar la consulta una vez cuando el componente se monta
    useEffect(() => {
        getPizza(); // Llamamos la función al cargar el componente
    }, []); // [] = se ejecuta solo 1 vez

    
    return (
        <div className="row">
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
                            <a href="#" className="btn btn-light me-2">Ver Mas</a>
                            <a href="#" className="btn btn-dark">Añadir</a>
                        </div>
                    </div>
                </div>
        </div>
    );
}