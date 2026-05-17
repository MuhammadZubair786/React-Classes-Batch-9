import { useEffect, useState } from "react";
import { supabase } from "../config/supabase-config";

function ShowData() {
  let [resturant, setResturant] = useState([]);
  let [category, setCategory] = useState([]);
  let [menu, setMenu] = useState([]);

  const getAllresturant = async () => {
    let { data, error } = await supabase.from("restaurant").select("");
    console.log(data);
    setResturant(data);
  };

  const getAllCategory = async (resId) => {
    setMenu([]);
    let { data, error } = await supabase
      .from("categories")
      .select("")
      .eq("restaurantid", resId);
    console.log(data);
    setCategory(data);
  };

  const getAllmenus = async (val) => {
    var input = val.split("/");
    let { data, error } = await supabase
      .from("menu")
      .select("")
      .eq("restaurantid", input[1])
      .eq("category_id", input[0]);
    console.log(data);
    for (var i = 0; i < data.length; i++) {
      data[i]["qunatity"] = 0;
    }
    console.log(data);
    setMenu(data);
  };

  const incQuantity = (i) => {
    console.log(menu);
    menu[i].qunatity = menu[i].qunatity + 1;
    setMenu([...menu]);
  };
  const decQuantity = (i) => {
    if(menu[i].qunatity>0){
           menu[i].qunatity = menu[i].qunatity - 1;
    setMenu([...menu]);
    }
 
  };

  useEffect(() => {
    getAllresturant();
  }, []);
  return (
    <>
      <h1>Hello user</h1>
      <select onChange={(e) => getAllCategory(e.target.value)}>
        <option selected disabled value={"new"}>
          Select Resturant
        </option>
        {resturant.map((v, i) => {
          return (
            <>
              <option key={i} value={v.id}>
                {v.restaurant_name}
              </option>
            </>
          );
        })}
      </select>

      {category.length > 0 && (
        <select onChange={(e) => getAllmenus(e.target.value)}>
          <option selected disabled value={"new"}>
            Select Category
          </option>
          {category.map((v, i) => {
            return (
              <>
                <option key={i} value={v.id + "/" + v.restaurantid}>
                  {v.title}
                </option>
              </>
            );
          })}
        </select>
      )}
      {menu.length > 0 && (
        <table>
          <tr>
            <th>S.no</th>
            <th>Menu Name</th>
            <th>price</th>
            <th>Quantity</th>
          </tr>
          {menu.map((v, i) => {
            return (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{v.title}</td>
                <td>{v.price}</td>
                <td>
                  <button onClick={() => incQuantity(i)}>+</button>
                  {v.qunatity}
                  <button onClick={() => decQuantity(i)}>-</button>
                </td>
              </tr>
            );
          })}
        </table>
      )}
    </>
  );
}

export default ShowData;
