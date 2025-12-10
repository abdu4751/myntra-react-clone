import { createSlice } from "@reduxjs/toolkit";

let ItemSlice=createSlice({

    name:"items",
    initialState:[],
    reducers:{
        addinitialItems:(store,action)=>{
             return action.payload
        }
    }
})


export const{addinitialItems}=ItemSlice.actions
export default ItemSlice.reducer
