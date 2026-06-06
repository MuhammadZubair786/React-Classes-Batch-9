import React from "react";
import { useSelector,useDispatch } from "react-redux";
import { increment,decrement,zeroState } from "./config/counterSlice";
import Todos from "./Todos";
const App=()=>{
  
  const count = useSelector((state)=>state.counter.value)
  const dispatchnew = useDispatch()
  
  return(
    <>
    <h1>Redux store</h1>
    <h2>{count}</h2>
    <button onClick={()=>dispatchnew(increment())}>Increment</button>
    <button onClick={()=>dispatchnew(decrement())}>Decrement</button>
    <button onClick={()=>dispatchnew(zeroState())}>Reset</button>
    <Todos/>


    </>
  )
}

export default App