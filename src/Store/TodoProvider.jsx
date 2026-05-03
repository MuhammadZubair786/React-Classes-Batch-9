import { createContext, useContext, useState } from "react";

const useCart = createContext();

export const CartProvider = ({ children }) => {
  const [cartItem, setCartItem] = useState([]);

  const addItem = (item) => {
    console.log(item)
    setCartItem([...cartItem, item]);
  };

  const DeleteItem =(index)=>{
    cartItem.splice(index,1)
    setCartItem([...cartItem])

  }
  const updateItem=(item,index)=>{
    cartItem[index]= item   
  }



  return (
    <useCart.Provider value={{ cartItem, addItem,DeleteItem,updateItem }}>
      {children}
    </useCart.Provider>
  );
};

export const UseEcomData =()=>{
    return useContext(useCart)
}  