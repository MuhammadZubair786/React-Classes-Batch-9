import { createContext, useContext, useState } from "react";

const userContext = createContext(); //store create

//create Stroe or store state and functions

export const UserProvider = ({ children }) => {
  let [user, setUser] = useState();

  const loginUser = (userdata) => {
    console.log(userdata)
    //store user data
    setUser(userdata);
  };

  return (
    <userContext.Provider value={{ user, loginUser }}>
      {children}
    </userContext.Provider>
  );
};

//use Content use for send data to any comp
export const UseUser = () => {
  return useContext(userContext); //data
};
