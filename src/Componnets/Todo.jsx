import { useState } from "react";
import { supabase } from "../config/supabase-config";
export const Todo = () => {
  const [todo, setTodo] = useState();
  const AddTodo = async () => {
    const { data, error } = await supabase
      .from("todos")
      .insert([{ title: todo }]);
      if(error){
        console.log(error.message)
        return

      }
      alert("Todo Add")


  };
  return (
    <>
      <input type="text" value={todo} onChange={(e)=>setTodo(e.target.value)} />
      <br />
      <button onClick={()=>AddTodo()}>Add todo</button>
    </>
  );
};
