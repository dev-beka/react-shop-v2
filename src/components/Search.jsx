import React from 'react';
import {setSearchValue} from "../redux/slices/filterSlice";
import {useDispatch, useSelector} from "react-redux";

const Search = () => {
  const dispatch = useDispatch()
  const {searchValue} = useSelector(item => item.filterSlice)
  const inputRef = React.useRef();
  const onChangeInput = (value) => {
    dispatch(setSearchValue(value))
  }

  const clearButton = () => {
    dispatch(setSearchValue(''))
    inputRef.current.focus();
  }
  
  return (
    <>
      <div className="input-canvas">
        <input ref={inputRef} value={searchValue}
               onChange={(event) => onChangeInput(event.target.value)} className="input" type="text"
               placeholder="Поиск ..."/>

        {searchValue && <svg onClick={clearButton}
                             className="clear-btn" width="64px" height="64px" viewBox="0 0 24 24" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
          <g id="SVGRepo_iconCarrier">
            <path
              d="M7.50006 5.5L4.05262 10.7909C3.71387 11.3107 3.69732 11.9772 4.00984 12.5133L7.50006 18.5H18.8588C19.7651 18.5 20.4999 17.7653 20.4999 16.8589V7.14109C20.4999 6.23474 19.7651 5.5 18.8588 5.5H7.50006Z"
              stroke="#000000" strokeLinecap="round" strokeLinejoin="round"></path>
            <path d="M10 8.5L17 15.5" stroke="#000000" strokeLinecap="round" strokeLinejoin="round"></path>
            <path d="M10 15.5L16.9303 8.49996" stroke="#000000" strokeLinecap="round" strokeLinejoin="round"></path>
          </g>
        </svg>}
      </div>
    </>
  );
};

export default Search;