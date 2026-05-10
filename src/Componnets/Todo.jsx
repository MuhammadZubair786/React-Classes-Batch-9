import { useEffect, useState } from "react";
import { supabase } from "../config/supabase-config";

export const Todo = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [todo, setTodo] = useState([]);

  // select * from todos;

  const getAllTodo = async () => {
   
    const { data, error } = await supabase.from("todos").select("*");
    if (error) {
      console.log(error);
    } else {
      console.log(data);
       setTodo([])
      setTodo(data);
    }
  };

  useEffect(() => {
    getAllTodo()
  }, []);

  const AddTodos = async () => {
    const { data, error } = await supabase.from("todos").insert([
      {
        title,
        description,
      },
    ]);

    if (error) {
      console.log(error);
      return;
    }
    console.log(data);
    // alert("Add New todo");
    getAllTodo()
  };

  const deletTodo = async(id)=>{
    console.log(id)
    const {data,error} = await supabase.from("todos").delete().eq("id",id)
    if(error){
      console.log(error)
    }
    else{
      alert("delete item")
      console.log("Test")
      getAllTodo()

    }

  }

  const updateTodo = async ()=>{
    const { data,error} = await supabase.from("todos").update({title:"SMIT COourse",description:"test smit new"}).eq("id",22)
    if(error){

    }
    else{
      console.log("done")
      getAllTodo()

    }
  }
  return (
    <>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button onClick={() => AddTodos()}>Add Todos</button>
      <br />
      <ol>
      {todo.map((v, i) => {
        return (
          <li>
            <b>Title : {v.title}</b>
            <b>&emsp;description : {v.description}</b>
            <button onClick={()=>updateTodo()}>Delete iTEM</button>

          </li>
        );
      })}
      </ol>
    </>
  );
};
