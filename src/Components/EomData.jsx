import { UseEcomData } from "../Store/TodoProvider";

export const EcomItem = () => {
  const { cartItem } = UseEcomData();
  return (
    <>
      {cartItem.map((v, i) => {
        return (
          <>
            <b>Index : {i}</b>
            <b>{v.title}</b> : <b>Price : {v.price}</b>
          </>
        );
      })}
    </>
  );
};
