import { Link, useNavigate } from "react-router-dom";
import { getInitials } from "../utils";
import { useEffect, useState } from "react";
import { supabase } from "../config/supabase";

function Users() {
  
  const [user, setUser] = useState([]);
  const [loginUser, setLoginUser] = useState();
  const [senderUser, setSenderUser] = useState();

  let nav = useNavigate()

  useEffect(() => {
    getAlLusers();
  }, []);

  const getAlLusers = async () => {
    const userLogin = JSON.parse(localStorage.getItem("userData")); //login user data get
    setLoginUser(userLogin);
     setSenderUser(userLogin);
    const { data, error } = await supabase
      .from("users")
      .select("")
      .neq("id", userLogin["id"]);

    console.log(data);
    setUser(data);
  };

  //room create room not find : create return room id
  const createChatRoom = async (v) => {

    //get room id
    const { data, error } = await supabase
      .from("chat_room")
      .select("*")
      .or(
        `and(sender_id.eq.${loginUser.id},reciever_id.eq.${v.id}),and(sender_id.eq.${v.id},reciever_id.eq.${loginUser.id})`,
      )
      .maybeSingle();

    if (!data) {
      const { data: newRoom, error: insertError } = await supabase
        .from("chat_room")
        .insert([
          {
            sender_id: loginUser.id,
            reciever_id: v.id,
            sender_name: loginUser.name,
            reciever_name: v.name,
          },
        ])
        .select();

      console.log(newRoom);
      alert("NEW ROOM CREATE")
      nav("/chat/" + newRoom.id)
      return
    }
    console.log(data)
      alert("ALREADY ROOM CREATE")

      nav("/chat/" + data.id)

  };
  

  return (
    <>
      <h1 style={{textAlign:"right"}}>Welcome : {senderUser?.name}</h1>
    <div className="page">
      <div className="page-header">
        <h1>Messages</h1>
        <p>Select someone to start a conversation</p>
      </div>

      {user.length === 0 ? (
        <div className="empty-state">
          <p>No other users yet.</p>
          <p>Sign up another account to chat.</p>
        </div>
      ) : (
        <ul className="user-list">
          {user.map(function (u) {
            return (
              <li key={u.id}>
              
                <div className="user-card-info">
                  <strong>{u.name}</strong>
                  <span>{u.email}</span>
                </div>
                <span
                  className="user-card-arrow"
                  onClick={() => createChatRoom(u)}
                >
                  →
                </span>
                {/* </Link> */}
              </li>
            );
          })}
        </ul>
      )}
    </div>
    </>
  );
}

export default Users;
