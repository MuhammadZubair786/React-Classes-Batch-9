import { useEffect, useState } from "react";
import { supabase } from "../config/supabase-config";
import ShowData from "./ShowData";

export const UserLogin = () => {
  let [name, setName] = useState();
  let [email, setEmail] = useState();
  let [password, setPassword] = useState();
  let [login, setLogin] = useState(false);
  let [loading,setloading]=useState(false)

  const checkUser =()=>{
     let user =  JSON.parse(localStorage.getItem("data"));
     if(user){
     setLogin(true)
     }
     else{
     setLogin(false)

     }
    
  }

  useEffect(()=>{
    checkUser()

  },[])

  const userLogin = async () => {
    setloading(true)
    const { data, error } = await supabase
      .from("customer")
      .select("id,name,email,password")
      .eq("email", email)
      .eq("password", password)
      .maybeSingle();

    if (error || !data) {
      console.log(data);
      alert("enter correct details");
    } else {
      console.log(data);
      localStorage.setItem("data", JSON.stringify(data));
      setLogin(true);
    }
    setloading(false)

  };
  if (login) {
    return <ShowData />;
  }

  return (
    <>
      <input
        type="text"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      {
        loading ? <b>Loading</b>:
        <button onClick={() => userLogin()}>Login user</button>

        
      }
      
    </>
  );
};
