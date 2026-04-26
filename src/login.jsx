import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

function Login() {
  let [email, setEmail] = useState();
  let [password, setpassword] = useState();
  let [role, setrole] = useState();
  let useNav = useNavigate();

  let loginfunc = () => {
    localStorage.setItem("userRole", "admin");
    useNav("/admin/dashoard");
  };

  let checkFunction = () => {
    const user = localStorage.getItem("userRole");
    console.log(user)
    if (user == "user") {

      useNav("/user/home")
    }
    if (user == "admin") {
      useNav("/admin/dashoard")

    }
  };

  useEffect(() => {
    checkFunction()
  },[]);

  return (
    <>
      <input type="email" placeholder="Enter Email" />
      <input type="password" placeholder="Enter Password" />
      <input type="text" placeholder="Enter User Role" />
      <button onClick={() => loginfunc()}>Login</button>
    </>
  );
}

export default Login;
