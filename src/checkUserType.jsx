import { useParams } from "react-router-dom";

function CheckType() {
    let p = useParams()
    console.log(p)
  return (
    <>
      <h1>Hello {p.teamType}</h1>
    </>
  );
}

export default CheckType