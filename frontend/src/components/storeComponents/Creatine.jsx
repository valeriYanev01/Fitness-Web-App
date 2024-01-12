import React from "react";
import SingleProductWeight from "./SingleProductWeight";

const Creatine = () => {
  return (
    <div>
      <SingleProductWeight name="Creatine" img="creatine\creatine-apple.jpg" price={8} weight={400} taste="apple" />
      <SingleProductWeight
        name={"Creatine"}
        img="creatine\creatine-watermelon.jpg"
        price={25}
        weight={400}
        taste="Watermelon"
      />
    </div>
  );
};

export default Creatine;
