import { createSlice } from "@reduxjs/toolkit";

const TodoSlice = createSlice({
  name: "1",
  initialState: {
    items: [],
  },
  reducers: {
    addTodos: (state, action) => {
      console.log(action);
      state.items.push({
        text: action.payload,
      });
    },
    deleteItem :(state,action)=>{
        console.log(action)
        state.items.splice(action.payload,1)
    }
  },
//   action.type = "todos/deletItem"
//   action.payload = undefined
});

export const { addTodos,deleteItem } = TodoSlice.actions;
export default TodoSlice.reducer;
