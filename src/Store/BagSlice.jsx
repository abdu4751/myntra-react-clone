import {createSlice} from '@reduxjs/toolkit'

const bagSlice=createSlice({
    name:"bag",
    initialState:[],
    reducers:{
        addToBag:(state,action)=>{
            state.push(action.payload)

        },
        removeFromBag:(state,action)=>{
          return state.filter(itemsId=>itemsId!==action.payload)
        }

    }

    
})

export default bagSlice.reducer
export const {addToBag,removeFromBag}=bagSlice.actions