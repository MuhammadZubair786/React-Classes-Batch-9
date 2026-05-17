import { useState } from "react";
import { supabase } from "../config/supabase-config";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState();

  const SignUpfunc =async () => {
    const PasswordRegex =
      /(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    const checkPassword = PasswordRegex.test(password);
    if (!checkPassword) {
      setPasswordError("Enter Strong Passoword");
      return
    } else {
      setPasswordError("");
    }


    const {data:existingUser} = await supabase.from("customer")
    .select()
    .eq("email",email)

    if(existingUser){
      console.log(existingUser)
      alert("User Already Exist")
      return

    }
    else{
       const {data,error} = await supabase.from("customer")
    .insert({name:"Ali",email:email,password:password})

    if(error){
      console.log(error)
      return
    }
    console.log("user regsister")

    }

    

   




  };

  return (
    <div style={{ width: "500px", margin: "auto" }}>
      <br />

      <input
        type="text"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <br />

      <input
        type="text"
        placeholder="Enter Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      {passwordError != "" ? (
        <b style={{ color: "red" }}>{passwordError}</b>
      ) : null}

      <br />
      <button onClick={() => SignUpfunc()}> SignUpfunc</button>
    </div>
  );
};

export default Signup;
