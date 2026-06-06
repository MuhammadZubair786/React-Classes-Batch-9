import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodos, deleteItem } from "./config/todoSlice";
const Todos = () => {
  const todos = useSelector((state) => state.todos.items);
  const dispatch = useDispatch();
  const [value, setValue] = useState("");
  // console.log(todos)

  const addNewTodos = () => {
    if (value != "") {
      dispatch(addTodos(value));
    }
  };
  return (
    <>
      <h1>Todos List </h1>
      <input
        type="text"
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      <button onClick={() => addNewTodos()}>Add New Todo</button>
      <ul>
        {todos.map((v, i) => {
          return (
            <li key={i}>
              {v.text}
              <button onClick={() => dispatch(deleteItem(i))}>deleteItem</button>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Todos;
