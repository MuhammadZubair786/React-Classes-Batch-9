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

    // signInWithPassword
    const  {data,error} = await supabase.auth.signUp({
        email,password
    })
    if(error){
        alert(error.message)
        return
    }
    console.log(data)
    alert("Signup User ")

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
