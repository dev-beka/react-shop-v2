import React from 'react';
import Search from "./Search";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {Context} from "../App";

export let totalCount;

const Header = () => {
  const {items, totalPrice} = useSelector(el => el.cartSlice)
  const {isModalPlate, setIsModalPlate} = React.useContext(Context);
  // const [isModalPlate, setIsModalPlate] = React.useState(false)

  totalCount = items.reduce((initial, item) => {
    return initial + item.count
  }, 0)

  const openModalPlate = () => {
    setIsModalPlate(true)
  }

  const closeModalPlate = () => {
    setIsModalPlate(false)
  }

  return (
    <>
      <div className="header-row-1">
        <div className="container">
          <div className="flex-holder">
            <div className="logo-holder">
              <h1 className="header-logo">react shop</h1>
              <span>|</span>
              <h1 className="author">Created by Bekzat</h1>

              <svg onClick={openModalPlate} className="open-modal-icon" width="18px" height="18px" viewBox="0 0 24 24"
                   fill="none"
                   xmlns="http://www.w3.org/2000/svg">
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  <path d="M15 15L21 21" stroke="#ffffff" strokeWidth="2" strokeLinecap="round"
                        strokeLinejoin="round"></path>
                  <path
                    d="M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                    stroke="#ffffff" strokeWidth="2"></path>
                </g>
              </svg>

              <div className={`overlay ${isModalPlate ? 'modal-active' : ''}`}>
                <div className="modal-plate">
                  <h3 className="header-logo-1">react shop</h3>
                  <span onClick={closeModalPlate} className="close-modal">⨉</span>
                  <div className="search-component">
                    <Search/>
                  </div>
                </div>
              </div>
              
            </div>
            <div className="cart-holder">
              <h2 className="price">{totalPrice ? totalPrice + ' $' : ''}</h2>
              <span>|</span>

              <Link to="/react-shop-v2/cart">
                <div className="cart">
                  <svg className="svg" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"
                       fill="none">
                    <path fillRule="evenodd" clipRule="evenodd"
                          d="M16.0001 3.66666C14.3433 3.66666 13.0001 5.0098 13.0001 6.66666V7.01316C13.7429 6.99998 14.5578 6.99998 15.4524 6.99999H16.548C17.4424 6.99998 18.2573 6.99998 19.0001 7.01316V6.66666C19.0001 5.0098 17.657 3.66666 16.0001 3.66666ZM21.0001 7.1039V6.66666C21.0001 3.90523 18.7616 1.66666 16.0001 1.66666C13.2387 1.66666 11.0001 3.90523 11.0001 6.66666V7.1039C10.8098 7.12027 10.6259 7.13924 10.4482 7.16119C9.10158 7.32758 7.99142 7.6771 7.04836 8.45976C6.1053 9.24243 5.55718 10.2692 5.14548 11.5621C4.7465 12.815 4.44449 14.4259 4.06484 16.4508L4.03726 16.5979C3.50153 19.4549 3.07934 21.7065 3.00186 23.4816C2.92245 25.3011 3.19313 26.808 4.21949 28.0447C5.24586 29.2813 6.67709 29.8252 8.48002 30.0824C10.239 30.3333 12.5298 30.3333 15.4366 30.3333H16.5636C19.4704 30.3333 21.7613 30.3333 23.5202 30.0824C25.3232 29.8252 26.7544 29.2813 27.7808 28.0447C28.8072 26.808 29.0778 25.3011 28.9984 23.4816C28.9209 21.7065 28.4988 19.4549 27.963 16.5979L27.9354 16.4508C27.5557 14.4259 27.2537 12.815 26.8548 11.5621C26.443 10.2692 25.8949 9.24243 24.9518 8.45976C24.0088 7.6771 22.8986 7.32758 21.552 7.16119C21.3744 7.13924 21.1904 7.12027 21.0001 7.1039ZM10.6934 9.14611C9.55273 9.28704 8.86377 9.55216 8.32563 9.99878C7.78749 10.4454 7.39994 11.0737 7.0512 12.1689C6.69405 13.2905 6.41305 14.7795 6.01822 16.8852C5.46393 19.8415 5.07049 21.9529 4.99996 23.5688C4.93064 25.1572 5.18538 26.0768 5.75852 26.7675C6.33164 27.458 7.18863 27.8779 8.76253 28.1024C10.3637 28.3309 12.5116 28.3333 15.5193 28.3333H16.4809C19.4886 28.3333 21.6365 28.3309 23.2377 28.1024C24.8116 27.8779 25.6686 27.458 26.2417 26.7675C26.8149 26.0768 27.0696 25.1572 27.0002 23.5688C26.9297 21.9529 26.5364 19.8415 25.982 16.8852C25.5872 14.7795 25.3062 13.2905 24.949 12.1689C24.6002 11.0737 24.2128 10.4454 23.6746 9.99878C23.1365 9.55216 22.4476 9.28704 21.3068 9.14611C20.1386 9.00176 18.6233 8.99999 16.4809 8.99999H15.5193C13.3769 8.99999 11.8616 9.00176 10.6934 9.14611Z"
                          fill="white"/>
                  </svg>
                  <span>{totalCount ? totalCount : ''}</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>


      <div className="header-row-2">
        <div className="container">
          <ul className="nav">
            <li><Link to="/react-shop-v2/">Главная</Link></li>
            <li>Lorem</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;