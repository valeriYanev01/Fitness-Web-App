import React from "react";
import SingleProductWeight from "./SingleProductWeight";

const Bcaa = () => {
  return (
    <div>
      <SingleProductWeight name="BCAA" img="bcaa\bcaa-cola.jpg" price={20} weight={400} taste="Cola" />
      <SingleProductWeight name="BCAA" img="bcaa\bcaa-greenapple.jpg" price={20} weight={400} taste="Green Apple" />
      <SingleProductWeight name="BCAA" img="bcaa\bcaa-mango.jpg" price={20} weight={400} taste="Mango" />
      <SingleProductWeight name="BCAA" img="bcaa\bcaa-watermelon.jpg" price={20} weight={400} taste="Watermelon" />
    </div>
  );
};

export default Bcaa;
