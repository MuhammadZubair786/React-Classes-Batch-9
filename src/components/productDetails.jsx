import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

let ProductDetails = () => {
  let params = useParams();
  console.log(params.productId);
  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${params.productId}`)
      .then((response) => console.log(response.data));
  });
  return (
    <>
      <h1>Product Details</h1>
    </>
  );
};
export default ProductDetails;
