import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import "./SingleProduct.css";
import Loading from "../components/Loading";
import ProductTypeContext from "../context/Store Page/ProductTypeContext";

const SingleProduct = () => {
  const [img, setImg] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [taste, setTaste] = useState("");
  const [weight, setWeight] = useState("");
  const [capsules, setCapsules] = useState("");

  const { type } = useContext(ProductTypeContext);

  const location = useLocation();

  const id = location.pathname.split("/")[3];

  axios
    .get(`http://localhost:6969/api/products/${id}`)
    .then((data) => {
      const product = data.data.product;

      setImg(product.img);
      setName(product.name);
      setPrice(product.price);
      setTaste(product.taste);
      setWeight(product.weight);
      setCapsules(product.capsules);
    })
    .catch((err) => console.log(err));
  return (
    <div className="store-single-product">
      {price ? (
        <div className="single-product-container">
          <div>
            <img src={img} className="single-product-img" />
          </div>
          <div className="single-product-info-container">
            <p className="single-product-name">Product: {name}</p>
            <p className="single-product-price">Price: {price} EUR</p>
            {type !== "vitamins" && type !== "minerals" ? (
              <>
                <p className="single-product-taste">Flavour: {taste}</p>
                <p className="single-product-weight">Weight: {weight} g</p>
              </>
            ) : (
              <p className="single-product-caps">Caps: {capsules}</p>
            )}
            <div className="single-product-purchase">Add to Basket</div>
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default SingleProduct;
