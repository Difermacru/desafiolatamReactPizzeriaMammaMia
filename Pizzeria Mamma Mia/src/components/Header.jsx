import img from "../assets/img/Header.jpg";

function Header() {

  return (
    <>

    <div className="header">
        <img src={img}alt="Header"/> 
        <h1>¡Pizerria Mamma Mia!</h1>
        <p>¡Tenenemos las mejores pizzas que podras encontrar!</p>
    </div>
      
    </>
  )
}

export default Header

