import PropTypes from "prop-types";

const CardPizza = ({name, price, ingredients, img}) => {
  return (
    <>
        <div className="card" style={{ width: "18rem" }}>
            <img src={img} className="card-img-top" alt="pizza"/>
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{ingredients}</p>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">Precio: {price}</li>
            </ul>
            <div className="card-body">
                <a href="#" className="btn btn-light">Ver Mas</a>
                <a href="#" className="btn btn-dark">Añadir</a>
            </div>
        </div>
    </> 
  );
};

CardPizza.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  ingredients: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

export default CardPizza;


