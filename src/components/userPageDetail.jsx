import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function UserPageDetails() {
  let params = useParams();
  
  console.log(params);
  
  let [userDetail, setuserDetails] = useState();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${params.userIdDetails}`)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setuserDetails(json);
      });
  }, []);
  return (
    <>
      <h1>User Details {params.userIdDetails}</h1>

      {userDetail != undefined ? (
        <div>
          <h1>naME: {userDetail.name}</h1>
          <h1>phone: {userDetail.phone}</h1>
          <h3>Address : {userDetail.address.city}</h3>
          <h3>Street : {userDetail.address.street}</h3>
        </div>
      ) : (
        <h1>loading</h1>
      )}
    </>
  );
}

export default UserPageDetails;
