import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './CounterSlice'
import TodoReducer from './todoSlice'

export const store =configureStore({
    reducer:{
        counter:counterReducer,   
        todos :  TodoReducer
    }
})