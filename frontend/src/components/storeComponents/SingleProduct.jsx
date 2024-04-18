import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import Loading from "../Loading";
import { ProductTypeContext } from "../../context/Store Page/ProductTypeContext";
import { useLocation } from "react-router-dom";
import "./SingleProduct.css";

const SingleProduct = () => {
  const [productData, setProductData] = useState(null);
  const { type, id, setBasketItems } = useContext(ProductTypeContext);
  const { pathname } = useLocation();
  const productId = pathname.split("/")[3];

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await axios.get(`https://backend-ten-bice.vercel.app/api/products/${productId}`);
        setProductData(response.data.product);
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };

    fetchProductDetails();
  }, [productId]);

  const addItemToBasket = async () => {
    try {
      const response = await axios.patch(
        "https://backend-ten-bice.vercel.app/api/users/addToBasket",
        { newBasket: [{ name: productId }] },
        { params: { _id: id } }
      );
      // Update basket items after adding item
      setBasketItems(response.data.updatedInfo.basket);
    } catch (error) {
      console.error("Error adding item to basket:", error);
    }
  };

  if (!productData) {
    return <Loading />;
  }

  const { img, name, price, taste, weight, capsules } = productData;

  return (
    <div className="store-single-product">
      <div className="single-product-container">
        <div>
          <img src={img} className="single-product-img" alt={name} />
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
          <div onClick={addItemToBasket} className="single-product-purchase">
            Add to Basket
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
