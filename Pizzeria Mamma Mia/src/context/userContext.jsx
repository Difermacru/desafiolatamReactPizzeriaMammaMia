import { createContext, useState } from "react";

// Creamos el contexto para poder compartir datos entre componentes
export const UserContext = createContext();

// Creamos el Provider que envolverá la aplicación
export const UserProvider = ({ children }) => {

    // Estado que guarda el token (simulado)
    // Por defecto está en true → usuario "logueado"
    const [token, setToken] = useState(true);

    // Función logout
    // Cuando se ejecuta, cambia el token a false
    // Esto simula que el usuario cerró sesión
    const logout = () => {
        setToken(false);
    };

    // Aquí exponemos el token y la función logout a toda la app
    return (
        <UserContext.Provider value={{ token, logout }}>
            {children}
        </UserContext.Provider>
    );
};