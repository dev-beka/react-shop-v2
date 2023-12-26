import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import CardDetail from "./pages/CardDetail";

export const Context = React.createContext();

function App() {
  const [currentPage, setCurrentPage] = React.useState(1)
  const [isModalPlate, setIsModalPlate] = React.useState(false)
  

  return (
    <>
      <Context.Provider value={{currentPage, setCurrentPage, isModalPlate, setIsModalPlate}}>
        <BrowserRouter>
          <Header/>
          <Routes>
            <Route path="/react-shop-v2/" element={<Home/>}/>
            <Route path="/react-shop-v2/cart" element={<Cart/>}/>
            <Route path="/react-shop-v2/shoes/:id" element={<CardDetail/>}/>
          </Routes>
        </BrowserRouter>
      </Context.Provider>
    </>
  );
}

export default App;
