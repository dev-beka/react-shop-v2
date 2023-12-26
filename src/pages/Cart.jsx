import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {setIncrement, setDecrement, removeItem} from "../redux/slices/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const {items, totalPrice} = useSelector(el => el.cartSlice)

  const increment = (el) => {
    dispatch(setIncrement(el))
  }

  const decrement = (el) => {
    dispatch(setDecrement(el))
  }

  const remove = (el) => {
    dispatch(removeItem(el))
  }
  
  return (
    <>
      <div className="container">
        <h1>Итого: {totalPrice}</h1>
        <div>
          <div className="cart-list">
            {items.map(el => (
              <div key={el.id} className="cart-canvas">
                <img src={el.images[1].url} alt="img"/>

                <div className="middle-part">
                  <p className="cart-category">{el.category}</p>
                  <p className="cart-name">{el.name}</p>
                  <div className="cart-counting">
                    <button onClick={() => decrement(el)}>&#8722;</button>
                    <p>{el.count}</p>
                    <button onClick={() => increment(el)}>+</button>
                  </div>
                </div>

                <div className="right-part">
                  <p>{el.price * el.count} $</p>
                  <div className="remove-holder">
                    <p onClick={() => remove(el)} className="remove">⨉ Удалить</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
    ;
};

export default Cart;