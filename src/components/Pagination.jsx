import React from 'react';
import {Context} from "../App";

const Pagination = () => {
  const pages = [1, 2, 3]
  const {currentPage,setCurrentPage} = React.useContext(Context)
  
  const isPageSelected = (num) => {
    setCurrentPage(num)
  }

  const nextBtn = () => {
    setCurrentPage(page => {
      if (page >= 3) {
        return page
      }
      return page + 1
    })
  }

  const prevBtn = () => {
    setCurrentPage(page => {
      if (page <= 1) {
        return page
      }
      return page - 1
    })
  }
  
  return (
    <div className="pagination-border">
      <div className="container">
        <div className="pagination">
          <button onClick={prevBtn}>⇦</button>
          <ul>
            {pages.map((num) => (
              <li onClick={() => isPageSelected(num)}
                  key={num}
                  className={currentPage === num ? 'page-selected' : ''}
              >{num}</li>
            ))}
          </ul>
          <button onClick={nextBtn}>⇨</button>
        </div>
      </div>
    </div>
  );
};

export default Pagination;