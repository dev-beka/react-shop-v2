import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {setSortType} from "../redux/slices/filterSlice";

export const sortList = [
  {name: 'Сначала дорогие', sortBy: '-price'},
  {name: 'Сначала дешевые', sortBy: 'price'},
  {name: 'Алфавиту', sortBy: '-name'}
]

const Sort = () => {
  const dispatch = useDispatch()
  const sortRef = React.useRef()
  const [openPopup, setOpenPopup] = React.useState(false)
  const {sortType} = useSelector(obj => obj.filterSlice)
  
  const togglePopup = () => {
    setOpenPopup(!openPopup)
  }

  const isSortSlected = (obj) => {
    dispatch(setSortType(obj))
  }

  React.useEffect(() => {
    const handleClickOutSide = (event) => {
      if (!event.composedPath().includes(sortRef.current)) {
        setOpenPopup(false)
      }
    }
    document.body.addEventListener('click', handleClickOutSide)

    return () => {
      document.body.removeEventListener('click', handleClickOutSide)
    }
  })
  
  
  return (
    <div ref={sortRef} className="sort-filter">
      
      <div onClick={togglePopup}
           className="sort-filter-button">
        <svg className={openPopup ? 'rotate' : ''} xmlns="http://www.w3.org/2000/svg" width="28" height="28"
             viewBox="0 0 38 38" fill="none">
          <g clipPath="url(#clip0_4_75)">
            <path d="M25.3334 19L15.8334 28.5V9.5L25.3334 19Z" fill="black"/>
          </g>
          <defs>
            <clipPath id="clip0_4_75">
              <rect width="38" height="38" fill="white"/>
            </clipPath>
          </defs>
        </svg>
        <h3>Сортировка по:</h3>
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 46 46" fill="none">
          <path fillRule="evenodd" clipRule="evenodd"
                d="M20.5896 15.3639C21.5158 13.9719 21.2831 12.1114 20.0423 10.9905C18.8016 9.86965 16.9272 9.82634 15.636 10.8887C14.3449 11.9511 14.0264 13.7988 14.8873 15.2322C15.7483 16.6655 17.5291 17.2523 19.0734 16.6114C19.6905 16.3539 20.2181 15.92 20.5896 15.3639Z"
                stroke="black" strokeWidth="3.84" strokeLinecap="round" strokeLinejoin="round"/>
          <path fillRule="evenodd" clipRule="evenodd"
                d="M20.5896 34.3436C21.5158 32.9515 21.2831 31.091 20.0423 29.9701C18.8016 28.8492 16.9272 28.8059 15.636 29.8684C14.3449 30.9308 14.0264 32.7785 14.8873 34.2119C15.7483 35.6452 17.5291 36.2318 19.0734 35.5911C19.6905 35.3335 20.2181 34.8996 20.5896 34.3436Z"
                stroke="black" strokeWidth="3.84" strokeLinecap="round" strokeLinejoin="round"/>
          <path fillRule="evenodd" clipRule="evenodd"
                d="M25.4104 24.8527C24.4842 23.4607 24.7169 21.6003 25.9576 20.4794C27.1984 19.3585 29.0728 19.3152 30.3639 20.3776C31.6552 21.44 31.9737 23.2876 31.1126 24.721C30.2517 26.1543 28.4709 26.7411 26.9266 26.1002C26.3095 25.8428 25.7819 25.4087 25.4104 24.8527Z"
                stroke="black" strokeWidth="3.84" strokeLinecap="round" strokeLinejoin="round"/>
          <path
            d="M21.16 12.0997C20.3979 12.0997 19.78 12.7175 19.78 13.4797C19.78 14.2419 20.3979 14.8597 21.16 14.8597V12.0997ZM35.88 14.8597C36.6421 14.8597 37.26 14.2419 37.26 13.4797C37.26 12.7175 36.6421 12.0997 35.88 12.0997V14.8597ZM14.4017 14.8597C15.1638 14.8597 15.7817 14.2419 15.7817 13.4797C15.7817 12.7175 15.1638 12.0997 14.4017 12.0997V14.8597ZM10.12 12.0997C9.35784 12.0997 8.73999 12.7175 8.73999 13.4797C8.73999 14.2419 9.35784 14.8597 10.12 14.8597V12.0997ZM21.16 31.0811C20.3979 31.0811 19.78 31.699 19.78 32.4611C19.78 33.2232 20.3979 33.8411 21.16 33.8411V31.0811ZM35.88 33.8411C36.6421 33.8411 37.26 33.2232 37.26 32.4611C37.26 31.699 36.6421 31.0811 35.88 31.0811V33.8411ZM14.4017 33.8411C15.1638 33.8411 15.7817 33.2232 15.7817 32.4611C15.7817 31.699 15.1638 31.0811 14.4017 31.0811V33.8411ZM10.12 31.0811C9.35784 31.0811 8.73999 31.699 8.73999 32.4611C8.73999 33.2232 9.35784 33.8411 10.12 33.8411V31.0811ZM24.84 24.3504C25.6021 24.3504 26.22 23.7325 26.22 22.9704C26.22 22.2082 25.6021 21.5904 24.84 21.5904V24.3504ZM10.12 21.5904C9.35784 21.5904 8.73999 22.2082 8.73999 22.9704C8.73999 23.7325 9.35784 24.3504 10.12 24.3504V21.5904ZM31.5983 21.5904C30.8362 21.5904 30.2183 22.2082 30.2183 22.9704C30.2183 23.7325 30.8362 24.3504 31.5983 24.3504V21.5904ZM35.88 24.3504C36.6421 24.3504 37.26 23.7325 37.26 22.9704C37.26 22.2082 36.6421 21.5904 35.88 21.5904V24.3504ZM21.16 14.8597H35.88V12.0997H21.16V14.8597ZM14.4017 12.0997H10.12V14.8597H14.4017V12.0997ZM21.16 33.8411H35.88V31.0811H21.16V33.8411ZM14.4017 31.0811H10.12V33.8411H14.4017V31.0811ZM24.84 21.5904H10.12V24.3504H24.84V21.5904ZM31.5983 24.3504H35.88V21.5904H31.5983V24.3504Z"
            fill="black"/>
        </svg>
      </div>
      <ul className={`popup ${openPopup ? 'active' : ''}`}>
        {sortList.map(obj => (
          <li onClick={() => isSortSlected(obj)}
              className={sortType.sortBy === obj.sortBy ? 'selected' : ''}
              key={obj.name}>{obj.name}</li>))}
      </ul>
    </div>
  );
};

export default Sort;