import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Products() {
  let [product, setProduct] = useState([]);
  let nav = useNavigate();
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((response) => {
      console.log(response.data);
      setProduct(response.data);
    });
  }, []);

 

  return (
    <>
      <h1>Products</h1>
      {product.map((v, i) => {
        return (
          <div key={i}>
            <h1>Product Name : {v.title}</h1>
            <p>Description : {v.description}</p>
            <button onClick={() => nav(`/product/${v.id}`)}>View Details</button>
          </div>
        );
      })}
    </>
  );
}

export default Products;
