import React from "react";
import SingleProductWeight from "./SingleProductWeight";

const Carbohydrate = () => {
  return (
    <div>
      <SingleProductWeight name="Carbohydrate" img="carbo\carbo-lemon.jpg" price={8} weight={400} taste="lemon" />
      <SingleProductWeight name="Carbohydrate" img="carbo\carbo-orange.jpg" price={8} weight={400} taste="orange" />
      <SingleProductWeight
        name="Carbohydrate"
        img="carbo\carbo-watermelon.jpg"
        price={8}
        weight={400}
        taste="Watermelon"
      />
    </div>
  );
};

export default Carbohydrate;
