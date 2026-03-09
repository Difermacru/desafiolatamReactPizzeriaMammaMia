import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
// Importa el provider del contexto del carrito
import { CartProvider } from "./context/CartContext.jsx";
import { PizzasProvider } from "./context/PizzasContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* CartProvider envuelve la aplicación para compartir
        el estado del carrito con todos los componentes */}
    <CartProvider>
      <BrowserRouter>
        <PizzasProvider>
          <App />
        </PizzasProvider>
      </BrowserRouter>
    </CartProvider>
  </React.StrictMode>
);