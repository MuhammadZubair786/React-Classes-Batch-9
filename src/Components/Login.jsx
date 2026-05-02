import { useState } from "react";
import { UseUser } from "../Store/userProvider";


export const UserLogin = () => {
  let [name, setName] = useState();
  let [email, setEmail] = useState();
  const {loginUser} =UseUser()

  const userLogin = () => {
    loginUser({name,email})
  };
  
  return (
    <>
      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={()=>userLogin()}>Login user</button>
    </>
  );
};
