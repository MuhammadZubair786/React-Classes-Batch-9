import { createSlice } from "@reduxjs/toolkit";

const CounterSlice = createSlice({
    name:"1",
    initialState:{
        value:20,
        
    },
    //functions
    reducers:{
        increment :(state)=>{
          state.value+=1
        },
        decrement :(state)=>{
            state.value-=1
        },
         zeroState :(state)=>{
            state.value=0
        }
    }

}) 

export const {increment,decrement,zeroState}= CounterSlice.actions
export default CounterSlice.reducer;