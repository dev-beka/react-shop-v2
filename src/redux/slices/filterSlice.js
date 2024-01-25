import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  categoryId: 'nike',
  sortType: {
    name: 'Сначала дорогие',
    sortBy: '-price'
  },
  searchValue: '',
}

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setCategoryId: (state, action) => {
      state.categoryId = action.payload
    },
    setSortType: (state, action) => {
      state.sortType = action.payload
    },
    setSearchValue: (state, action) =>{
      state.searchValue = action.payload
    },
    setParams: (state, action) =>{
      state.categoryId = action.payload.categoryId
      state.sortType = action.payload.sortType
    }
  }
})

export const {setCategoryId, setSortType, setSearchValue, setParams} = filterSlice.actions

export default filterSlice.reducer