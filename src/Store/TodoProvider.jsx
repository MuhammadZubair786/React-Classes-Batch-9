import { createContext, useContext, useState } from "react";

const useCart = createContext();

export const CartProvider = ({ children }) => {
  const [cartItem, setCartItem] = useState([]);

  const addItem = (item) => {
    setCartItem([...cartItem, item]);
  };

  return (
    <useCart.Provider value={{ cartItem, addItem }}>
      {children}
    </useCart.Provider>
  );
};

export const UseEcomData =()=>{
    return useContext(useCart)
}  