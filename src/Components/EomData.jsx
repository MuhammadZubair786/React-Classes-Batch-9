import { UseEcomData } from "../Store/TodoProvider";

export const EcomItem = ({editfunc}) => {

  const { cartItem ,DeleteItem} = UseEcomData();

  return (
    <>
      {cartItem.map((v, i) => {
        return (
          <div key={i}>
            <b>Index : {i+1}</b>
            <b> Title {v.title}</b> : <b> Price : {v.price}</b>
            <button style={{margin:"20px"}} onClick={()=>editfunc(i)}>Edit</button>
            <button style={{margin:"20px"}} onClick={()=>DeleteItem(i)}>Delete</button>
          </div>
        );
      })}
    </>
  );
};
