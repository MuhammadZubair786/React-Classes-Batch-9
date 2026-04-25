import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function UserPage() {
  const [User, setUser] = useState([]);
  let nav = useNavigate()

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
         setUser(json);
      });
   
  }, []);

  return (
    <>
      <h1>User List</h1>
      {
        User.map((v,i)=>{
            return(
                <div key={i}>
                    <h1>Id : {v.id}</h1>
                    <h1>Name : {v.name}</h1>
                    <h1>Email : {v.email}</h1>
                    <button onClick={()=>nav(`/users/${v.id}`)}>Open Details Page</button>

                </div>
                
            )
        })
      }
    </>
  );
}

export default UserPage;
