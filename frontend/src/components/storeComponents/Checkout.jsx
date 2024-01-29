import React, { useContext, useEffect, useState, useMemo } from "react";
import axios from "axios";
import "./Checkout.css";
import { ProductTypeContext } from "../../context/Store Page/ProductTypeContext";

const Checkout = () => {
  const [uniqueProducts, setUniqueProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const { basketItems, setBasketItems, finalPrice, setFinalPrice, id } = useContext(ProductTypeContext);

  useEffect(() => {
    setLoading(true);

    const fetchProductDetails = async () => {
      try {
        const productIds = basketItems.map((item) => item.name);
        const responses = await Promise.all(
          productIds.map((productId) => axios.get(`http://localhost:6969/api/products/${productId}`))
        );

        const productDetails = responses.map((response) => response.data.product);
        setUniqueProducts(getUniqueProducts(productDetails));
        setLoading(false);
      } catch (error) {
        console.error("Error fetching product details:", error);
        setLoading(false);
      }
    };

    fetchProductDetails();
  }, [basketItems]);

  useEffect(() => {
    if (uniqueProducts.length > 0) {
      const updatedFinalPrice = uniqueProducts.reduce((total, product) => {
        const productPrice = product.product.price;
        return total + productPrice * product.count;
      }, 0);
      setFinalPrice(updatedFinalPrice);
    } else {
      setFinalPrice(0);
    }
  }, [uniqueProducts]);

  const getUniqueProducts = useMemo(() => {
    return (products) => {
      const uniqueProductsMap = new Map();
      products.forEach((product) => {
        if (uniqueProductsMap.has(product._id)) {
          uniqueProductsMap.set(product._id, uniqueProductsMap.get(product._id) + 1);
        } else {
          uniqueProductsMap.set(product._id, 1);
        }
      });

      return Array.from(uniqueProductsMap.entries()).map(([productId, count]) => ({
        product: products.find((p) => p._id === productId),
        count,
      }));
    };
  }, []);

  const handleIncrement = async (productId) => {
    try {
      const response = await axios.patch(
        `http://localhost:6969/api/users/addToBasket`,
        { newBasket: [{ name: productId }] },
        { params: { _id: id } }
      );
      const updatedBasket = response.data.updatedInfo.basket;
      setBasketItems(updatedBasket);
    } catch (error) {
      console.error("Error incrementing product quantity:", error);
    }
  };

  const handleDecrement = async (productId) => {
    try {
      const response = await axios.patch(
        `http://localhost:6969/api/users/deleteFromBasket`,
        { removedItem: { productId } },
        { params: { _id: id } }
      );
      const updatedBasket = response.data.updatedInfo.basket;
      setBasketItems(updatedBasket);
    } catch (error) {
      console.error("Error decrementing product quantity:", error);
    }
  };

  const removeItemFromBasket = async (productId) => {
    try {
      const response = await axios.patch(
        `http://localhost:6969/api/users/removeFromBasket`,
        { removedItem: { name: productId } },
        { params: { _id: id } }
      );
      const updatedBasket = response.data.user.basket;
      setBasketItems(updatedBasket);
    } catch (error) {
      console.error("Error removing item from basket:", error);
    }
  };

  const purchaseProducts = async () => {
    try {
      setBasketItems([]);
      setFinalPrice(0);

      await axios.patch(`http://localhost:6969/api/users/clearBasket`, { params: { _id: id } });

      console.log("Products purchased successfully!");
    } catch (error) {
      console.error("Error purchasing products:", error);
    }
  };

  if (loading) {
    return <div>Loading Basket</div>;
  }

  if (!basketItems) {
    return (
      <div>
        <div>Empty Basket</div>
      </div>
    );
  }

  return (
    <div className="checkout">
      <div className="checkout-container">
        {uniqueProducts.map(({ product, count }) => (
          <div key={`${product._id}-${count}`} className="checkout-products">
            <div>
              <img src={product.img} width="100px" alt={product.name} />
            </div>
            <div>
              <div className="checkout-name">Product: {product.name}</div>
              <div className="checkout-price">Price: {product.price}</div>
              <div className="checkout-taste">Taste: {product.taste}</div>
              <span className="checkout-quantity">Quantity: {count}</span>
              <button className="checkout-increase" onClick={() => handleIncrement(product._id)}>
                +
              </button>{" "}
              <button className="checkout-decrease" onClick={() => handleDecrement(product._id)}>
                -
              </button>
            </div>
            <span className="checkout-remove-item" onClick={() => removeItemFromBasket(product._id)}>
              X
            </span>
          </div>
        ))}
      </div>
      <div>
        <div>Final Price: {finalPrice} EUR</div>
        <div onClick={purchaseProducts} className="checkout-purchase">
          Purchase Products
        </div>
      </div>
    </div>
  );
};

export default Checkout;
