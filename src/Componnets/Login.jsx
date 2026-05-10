import { useState } from "react";
import { supabase } from "../config/supabase-config";


export const UserLogin = () => {
  let [name, setName] = useState();
  let [email, setEmail] = useState();


  const userLogin = async() => {

    const {data,error} = await supabase.auth.signUp({
        email : "user@gmail.com",
        password:"123456"
    })
    if(error){
        alert(error.message)
    }
    alert("Login account")
   
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