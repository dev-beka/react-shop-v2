import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {setCategoryId} from "../redux/slices/filterSlice";


const Categories = () => {
  const dispatch = useDispatch()
  const {categoryId} = useSelector(item => item.filterSlice)

  const isCategory = (i) => {
    dispatch(setCategoryId(i))
  }

  return (
    <ul className="category-list">
      <li onClick={() => isCategory('nike')}
          className={categoryId === "nike" ? 'cat-selected' : ''}>Nike
      </li>
      <span>|</span>
      <li onClick={() => isCategory('jordan')}
          className={categoryId === "jordan" ? 'cat-selected' : ''}>Jordan
      </li>
    </ul>
  );
};

export default Categories;