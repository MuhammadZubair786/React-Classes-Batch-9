import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import { UseUser } from "./Store/userProvider";
import { UserLogin } from "./Components/Login";
import { Ecom } from "./Components/EcomItem";
import { EcomItem } from "./Components/EomData";
import { CartProvider } from "./Store/TodoProvider";

function App() {
 
  const { user } = UseUser(); // get all values or function from store,[],(),{}
  console.log(user)

  return (
    <>
      <h1>Hello Context Api</h1>
      <h1>Welcome {user?.name}</h1>
      <h1>Welcome {user?.email}</h1>

      <UserLogin/>
      
      <br/>
      <CartProvider>
      <Ecom/>
      <EcomItem/>
      </CartProvider>
    </>
  );
}

export default App;
