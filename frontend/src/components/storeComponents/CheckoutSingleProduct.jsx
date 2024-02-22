import React from "react";

const CheckoutSingleProduct = ({ product, count, handleIncrement, handleDecrement, removeItemFromBasket, loading }) => {
  return (
    <div className="checkout-products">
      <div>
        <img src={product.img} width="100px" alt={product.name} />
      </div>
      <div>
        <div className="checkout-name">Product: {product.name}</div>
        <div className="checkout-price">Price: {product.price}</div>
        <div className="checkout-taste">Taste: {product.taste}</div>
        <span className="checkout-quantity">Quantity: {count}</span>
        {!loading ? (
          <button className="checkout-increase" onClick={() => handleIncrement(product._id)}>
            +
          </button>
        ) : (
          <button className="checkout-increase disable" disabled={true}>
            +
          </button>
        )}
        {!loading ? (
          <button className="checkout-decrease" onClick={() => handleDecrement(product._id)}>
            -
          </button>
        ) : (
          <button className="checkout-decrease disable" disabled={true}>
            -
          </button>
        )}
      </div>
      <span className="checkout-remove-item" onClick={() => removeItemFromBasket(product._id)}>
        X
      </span>
    </div>
  );
};

export default CheckoutSingleProduct;
