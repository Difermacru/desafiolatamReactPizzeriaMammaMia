import { Route, Routes, Navigate } from "react-router-dom"
import NavBar from "./components/NavBar"
import Home from "./pages/Home"
import Footer from "./components/Footer"
import Register from "./pages/register"
import Login from "./pages/login"
import Cart from "./pages/Cart"
import Pizza from "./pages/Pizza"
import NotFound from "./pages/NotFound"
import Profile from "./pages/profile"
import { UserContext } from "./context/userContext"
import { useContext } from "react";

function App() {

  const { token } = useContext(UserContext);

  return (
    <>
      <NavBar/>
      <Routes>
        
        <Route
          path="/"
          element={<Home/>}
        />

         {/*RUTA PROTEGIDA #3: REGISTER */}
        {/*Igual que login, se bloquea si ya está logueado
          Si token = false → puede registrarse
          Si token = true  → lo redirige al Home
        */}
        <Route
          path="/register"
          element={!token ? <Register /> : <Navigate to="/" />}
        />

        <Route
          path="/login"
          element={<Login/>}
        />

        <Route
          path="/cart"
          element={<Cart/>}
        />

        <Route 
          path="/pizza/:id" 
          element={<Pizza />}
        />

        <Route
          path="*"
          element={<NotFound />}
        />

         {/*RUTA PROTEGIDA #1: PROFILE */}
        {/*Esta ruta requiere que el usuario esté logueado
          Si token = true  → entra a Profile
          Si token = false → lo redirige a /login
        */}
        <Route
          path="/profile"
          element={token ? <Profile /> : <Navigate to="/login" />}
        />
         
      </Routes>
      
      <Footer/>
  
    </>
  )
}

export default App
