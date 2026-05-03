import { useState } from "react";
import { UseEcomData } from "../Store/TodoProvider";
import { EcomItem } from "./EomData";

export const Ecom = () => {
  const [title, setTitle] = useState();
  const [price, setPrice] = useState();
  const { addItem,cartItem,updateItem } = UseEcomData();
  const [editStatus, setEditStatus] = useState(false);
  const [selectedIndex,setSelectedIndex]= useState()

  const Additem = () => {
    console.log(title, price);
    addItem({
      title,
      price,
    });
    setTitle("");
    setPrice("");
  };

  const EditItem = (i) => {
    console.log("Test",i);
    setTitle(cartItem[i].title)
    setPrice(cartItem[i]["price"])
    setEditStatus(true) 
    setSelectedIndex(i)


  };

  const updateTodo =()=>{
    var item = {
      title,price
    }
    updateItem(item,selectedIndex)
    setEditStatus(false)
    setTitle("")
    setPrice("")


  }

  return (
    <>
      <input
        type="text"
        placeholder="Enter Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter price"
        onChange={(e) => setPrice(e.target.value)}
        value={price}
      />
      {
        editStatus?
      <button onClick={updateTodo}>Update Item</button>:
      <button onClick={Additem}>Add Item</button>


      }
      <EcomItem editfunc={EditItem}   />
    </>
  );
};
