import { Route, Routes } from "react-router-dom"
import NavBar from "./components/NavBar"
import Home from "./pages/Home"
import Footer from "./components/Footer"
import Register from "./pages/register"
import Login from "./pages/login"
import Cart from "./pages/Cart"
import Pizza from "./pages/Pizza"
import NotFound from "./pages/NotFound"
import Profile from "./pages/profile"

function App() {

  return (
    <>
      <NavBar/>
      <Routes>
        
        <Route
          path="/"
          element={<Home/>}
        />

        <Route
          path="/register"
          element={<Register/>}
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
          path="/pizza/p001"
          element={<Pizza/>}
        />

        <Route
          path="*"
          element={<NotFound />}
        />

        <Route 
          path="/profile" 
          element={<Profile />} 
        />
         
      </Routes>
      
      <Footer/>
  
    </>
  )
}

export default App
