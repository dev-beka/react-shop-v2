import React from 'react';
import {Link} from "react-router-dom";

const Card = ({id, name, images, price}) => {
  
  return (
    <div className="card-block">
      <Link className="link" to={`/react-shop-v2/shoes/${id}`}>
        <div className="card-canvas">
          <div className="card-content">
            <div className="img-canvas">
              <img src={images[1].url} alt="img"/>
            </div>
            <h3>{name}</h3>
            <p>Цена: {price} $</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;