import React from 'react';
import {Link, useParams} from "react-router-dom";
import axios from "axios";
import {url} from "./Home";
import Slider from "../components/Slider";
import {useDispatch} from "react-redux";
import {setItems} from "../redux/slices/cartSlice";
import qs from "qs";

const CardDetail = () => {
  const params = useParams()
  const dispatch = useDispatch();
  const [shoe, setShoe] = React.useState(null)
  const [openPopup, setOpenPopup] = React.useState(false)

  React.useEffect(() => {
    async function fetchShoes() {
      try {
        const res = await axios.get(`${url}/${params.id}`)
        setShoe(res.data)
      } catch (e) {
        console.log(e)
      }
    }

    fetchShoes();
  }, [params.id]);
  

  if (shoe === null) {
    return 'Загрузка...'
  }

  const togglePopup = () => {
    setOpenPopup(!openPopup)
  }

  const addToCart = () => {
    dispatch(setItems(shoe))
  }
  
  return (
    <>
      <div className="link-description__canvas">
        <div className="container">
          <div className="link-description__flex">
            <Link to="/react-shop-v2/">
              <h4>{`< `}{shoe.category}</h4>
            </Link>
            <span>|</span>
            <h4 className="shoe-title-name">{shoe.name}</h4>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="card-detail-canvas">
          <Slider {...shoe}/>
          <div className="size-display">
            <h2>{shoe.name}</h2>
            <p>Цена: {shoe.price}$</p>
            <div className="size-block-canvas">
              <div onClick={togglePopup} 
                className="choose-size-popup">
                <h4>Выберите размер</h4>
                <svg className={openPopup? 'rotate': ''} width="64px" height="64px" viewBox="0 0 24.00 24.00" fill="none"
                     xmlns="http://www.w3.org/2000/svg"
                     stroke="#000000" strokeWidth="0.00024000000000000003">
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                  <g id="SVGRepo_iconCarrier">
                    <path
                      d="M15.1997 10.4919L13.2297 8.52188L10.0197 5.31188C9.33969 4.64188 8.17969 5.12188 8.17969 6.08188V12.3119V17.9219C8.17969 18.8819 9.33969 19.3619 10.0197 18.6819L15.1997 13.5019C16.0297 12.6819 16.0297 11.3219 15.1997 10.4919Z"
                      fill="#656565"></path>
                  </g>
                </svg>
              </div>
              <ul className={`popup-list-canvas ${openPopup? 'active': ''}`}>
                <li>39 EU</li>
                <li>40 EU</li>
                <li>41 EU</li>
                <li>42 EU</li>
                <li>43 EU</li>
              </ul>
              <button onClick={addToCart} className="add-to-cart-button">Добавить в корзину</button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="product-detail-border">
        <div className="container">
          <h3>PRODUCT DETAILS</h3>
        </div>
      </div>
      <div className="container">
        <p className="product-detail-text">The Air Jordan 13 GS “University Blue” is the grade school youth sizing of the
        colorway of Michael Jordan’s
        former signature shoe that is inspired by his alma mater, the University of North Carolina. The Jordan 13’s
        “University Blue” colorway shows love for the UNC Tar Heels by incorporating its signature light blue hue
        onto
        its design. The shoe features a dot-embroidered black mesh upper that’s contrasted with University Blue
        suede
        overlays. The Jordan 13’s signature holographic panther eye emblem appears on the lateral side of the shoe.
        A
        University Blue Jumpman is embroidered on the black leather tongue. Black midsole walls complete the look.
        Release date: December 23, 2022</p>
      </div>
    </>
  );
};

export default CardDetail;