import { useState } from "react";
import Navbar from './components/Navbar'
import { useNavigate } from "react-router-dom";
function UserType() {
  let navigate = useNavigate()
  let [user, setUser] = useState([
    { userType: "User", name: "Ali" },
    { userType: "Staff", name: "Omer" },
    { userType: "admin", name: "Super Admin" },
  ]);

  return (<>
  <Navbar/>
  {user.map((v,i)=>{
    return(
        <div key={i}>
            <h1>User Type : {v.userType}</h1>
            <h1>User Name : {v.name}</h1>
            <button onClick={()=>navigate(`/team/${v.userType}`)}>Open Tab</button>
        </div>
    )
  })}
  </>);
}
export default UserType
