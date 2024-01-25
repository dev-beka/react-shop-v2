import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalPrice: 0,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setItems: (state, action) => {
      const findItem = state.items.find(el => el.id === action.payload.id)

      if (findItem) {
        findItem.count++
      } else {
        state.items.push({
          ...action.payload, count: 1
        })
      }

      state.totalPrice = state.items.reduce((sum, obj) => {
        return (obj.price * obj.count) + sum
      }, 0)
        state.totalCount = state.items.reduce((sum, el)=>{
        return sum + el.count
      }, 0)
    },
    setIncrement: (state, action) =>{
      const findItem = state.items.find(el => el.id === action.payload.id)
      
      if(findItem){
        findItem.count++
      }
      state.totalPrice = state.items.reduce((sum, el)=>{
        return (el.price * el.count) + sum
      }, 0)
      
    },
    setDecrement: (state, action) =>{
      const findItem = state.items.find(el => el.id === action.payload.id)

      if(findItem.count <= 0){
        findItem.count = 0 
      } else{
        findItem.count--
        state.totalPrice -= findItem.price
      }
    },
    removeItem: (state, action) =>{
      const filterItem = state.items.filter(el => el.id !== action.payload.id);
      
      if(filterItem){
        state.items = filterItem
      }
      state.totalPrice -= action.payload.price * action.payload.count
    }
  }
})

export const {setItems, setIncrement, setDecrement, removeItem } = cartSlice.actions

export default cartSlice.reducer