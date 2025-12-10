import { createSlice } from "@reduxjs/toolkit";

const fetchStatusSlice=createSlice({
    name:"fetchStatus",
    initialState:{
        fetchDone:false,
        currentylFetching:false,
    },
    reducers:{
        markFetchDone:(state)=>{
             state.fetchDone=true
        },
        markFetchingStarted:(state)=>{
              state.currentylFetching=true
        },
        markFetchingFinished:(state)=>{
               state.currentylFetching=false
        }
    }
})
export const{markFetchDone,markFetchingStarted,markFetchingFinished}=fetchStatusSlice.actions
export default fetchStatusSlice.reducer;