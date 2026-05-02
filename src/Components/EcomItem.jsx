import { useState } from "react";
import { UseEcomData } from "../Store/TodoProvider";

export const Ecom = () => {
  const [title, setTitle] = useState();
  const [price, setPrice] = useState();
  const {addItem}=UseEcomData()

  const Additem = ()=>{
    addItem({
        title,price
    })

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
      <button onClick={()=>addItem()}>Add Item</button>
    </>
  );
};
