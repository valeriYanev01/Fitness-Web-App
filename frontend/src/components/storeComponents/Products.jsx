import React, { useContext, useEffect, useState } from "react";
import ProductTypeContext from "../../context/Store Page/ProductTypeContext";
import "./Products.css";
import Bcaa from "./Bcaa";
import Protein from "./Protein";
import Carbohydrate from "./Carbohydrate";
import Creatine from "./Creatine";
import Minerals from "./Minerals";
import Vitamins from "./Vitamins";
import axios from "axios";

const Products = () => {
  const { type } = useContext(ProductTypeContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:6969/api/products", { params: { type: type } }).then((data) => {
      setProducts(data.data.getProducts);
    });
  }, []);

  return (
    <div className="products">
      {products.map((product) => (
        <div key={product._id}>
          <p>Name: {product.name}</p>
          <p>Price: {product.price}</p>
          <p>Weight: {product.weight}</p>
          <p>Taste: {product.taste}</p>
          <img src={product.img} />
        </div>
      ))}
      {/* {type == "protein" ? (
        <Protein />
      ) : type == "bcaa" ? (
        <Bcaa />
      ) : type == "carbohydrate" ? (
        <Carbohydrate />
      ) : type == "creatine" ? (
        <Creatine />
      ) : type == "minerals" ? (
        <Minerals />
      ) : type == "vitamins" ? (
        <Vitamins />
      ) : (
        ""
      )} */}
    </div>
  );
};

export default Products;
