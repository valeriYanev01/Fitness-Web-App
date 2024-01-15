import React, { useContext, useEffect, useState } from "react";
import ProductTypeContext from "../../context/Store Page/ProductTypeContext";
import "./Products.css";
import axios from "axios";

const Products = () => {
  const { type } = useContext(ProductTypeContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:6969/api/products", { params: { type: type } }).then((data) => {
      setProducts(data.data.getProducts);
    });
  }, [type]);

  return (
    <div className="products">
      {products.map((product) => (
        <div key={product._id}>
          <p>Name: {product.name}</p>
          <p>Price: {product.price}</p>
          {product.weight ? <p>Weight: {product.weight}</p> : <p>Capsules: {product.capsules}</p>}
          {product.taste && <p>Taste: {product.taste}</p>}
          <img src={product.img} />
        </div>
      ))}
    </div>
  );
};

export default Products;
