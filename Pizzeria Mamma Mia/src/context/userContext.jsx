import { createContext, useState } from "react";

// Creamos el contexto para poder compartir datos entre componentes
export const UserContext = createContext();

// Creamos el Provider que envolverá la aplicación
export const UserProvider = ({ children }) => {

    // Estado que guarda el token y email
    const [token, setToken] = useState(null);
    const [email, setEmail] = useState(null);

    const login = async (userData) => {
        try {
            const response = await fetch("http://localhost:5000/api/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(userData),
            });

            const data = await response.json();

            // Guardamos token y email
            setToken(data.token);
            setEmail(data.email);

        } catch (error) {
            console.error("Error en login:", error);
        }
    };

    const register = async (userData) => {
        try {
            const response = await fetch("http://localhost:5000/api/auth/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(userData),
            });

            const data = await response.json();

            // Guardamos token y email
            setToken(data.token);
            setEmail(data.email);

        } catch (error) {
            console.error("Error en register:", error);
        }
    };

    const getProfile = async () => {
        try {
            const response = await fetch("http://localhost:5000/api/auth/me", {
                method: "GET",
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            });

            const data = await response.json();

            // Actualizamos el email desde el backend
            setEmail(data.email);

        } catch (error) {
            console.error("Error obteniendo perfil:", error);
        }
    };

    // Función logout
    const logout = () => {
        setToken(null);
        setEmail(null);
    };

    // Aquí exponemos el token y la función logout a toda la app
    return (
        <UserContext.Provider value={{ 
            token,
            email,
            login,
            register, 
            logout,
            getProfile 
        }}>
            {children}
        </UserContext.Provider>
    );
};