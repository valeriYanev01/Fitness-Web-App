import React from "react";
import SingleProductWeight from "./SingleProductWeight";
import SingleProductCapsule from "./SingleProductCapsule";

const Products = () => {
  return (
    <div>
      <SingleProductWeight
        name="Whey Protein"
        type="protein"
        img="protein\1k-white-chocolate-coconut-protein.png"
        price={25}
        weight={1000}
        taste="White Chocolate Coconut"
      />
      <SingleProductWeight
        name="Whey Protein"
        type="protein"
        img="protein\1kg-blueberry-protein.png"
        price={25}
        weight={1000}
        taste="Blueberry"
      />
      <SingleProductWeight
        name="Whey Protein"
        type="protein"
        img="protein\1kg-chocolate-protein.png"
        price={25}
        weight={1000}
        taste="Chocolate"
      />
      <SingleProductWeight
        name="Whey Protein"
        type="protein"
        img="protein\1kg-saltedcaramel-protein.png"
        price={25}
        weight={1000}
        taste="Salted Caramel"
      />
      <SingleProductWeight
        name="Whey Protein"
        type="protein"
        img="protein\1kg-vanilla-ice-cream-protein.png"
        price={25}
        weight={1000}
        taste="Vanilla Ice Cream"
      />
      <SingleProductWeight
        name="Whey Protein"
        type="protein"
        img="protein\1kg-unflavored-protein.png"
        price={25}
        weight={1000}
        taste="Unflavored"
      />

      <SingleProductWeight
        name="Whey Protein"
        type="protein"
        img="protein\2kg-blueberry-protein.png"
        price={38}
        weight={2000}
        taste="Blueberry"
      />

      <SingleProductWeight
        name="Whey Protein"
        type="protein"
        img="protein\2kg-chocolate-protein.png"
        price={38}
        weight={2000}
        taste="Chocolate"
      />
      <SingleProductWeight
        name="Whey Protein"
        type="protein"
        img="protein\2kg-saltedcaramel-protein.png"
        price={38}
        weight={2000}
        taste="Salted Caramel"
      />
      <SingleProductWeight
        name="Whey Protein"
        type="protein"
        img="protein\2kg-unflavored-protein.png"
        price={38}
        weight={2000}
        taste="Unflavored"
      />
      <SingleProductWeight
        name="Whey Protein"
        type="protein"
        img="protein\2kg-vanilla-ice-cream-protein.png"
        price={38}
        weight={2000}
        taste="Vanilla Ice Cream"
      />
      <SingleProductWeight
        name="Whey Protein"
        type="protein"
        img="protein\2kg-white-chocolate-coconut-protein.png"
        price={38}
        weight={2000}
        taste="White Chocolate Coconut"
      />

      <SingleProductWeight name="BCAA" type="bcaa" img="bcaa\bcaa-cola.jpg" price={20} weight={400} taste="Cola" />
      <SingleProductWeight
        name="BCAA"
        type="bcaa"
        img="bcaa\bcaa-greenapple.jpg"
        price={20}
        weight={400}
        taste="Green Apple"
      />
      <SingleProductWeight name="BCAA" type="bcaa" img="bcaa\bcaa-mango.jpg" price={20} weight={400} taste="Mango" />
      <SingleProductWeight
        name="BCAA"
        type="bcaa"
        img="bcaa\bcaa-watermelon.jpg"
        price={20}
        weight={400}
        taste="Watermelon"
      />
      <SingleProductWeight
        name="Carbohydrate"
        type="carbohydrate"
        img="carbo\carbo-lemon.jpg"
        price={8}
        weight={400}
        taste="lemon"
      />
      <SingleProductWeight
        name="Carbohydrate"
        type="carbohydrate"
        img="carbo\carbo-orange.jpg"
        price={8}
        weight={400}
        taste="orange"
      />
      <SingleProductWeight
        name="Carbohydrate"
        img="carbo\carbo-watermelon.jpg"
        price={8}
        weight={400}
        taste="Watermelon"
      />
      <SingleProductWeight
        name="Creatine"
        type="creatine"
        img="creatine\creatine-apple.jpg"
        price={8}
        weight={400}
        taste="apple"
      />
      <SingleProductWeight
        name={"Creatine"}
        type="creatine"
        img="creatine\creatine-watermelon.jpg"
        price={25}
        weight={400}
        taste="Watermelon"
      />

      <SingleProductCapsule name="Boron" type="minerals" caps={60} price={6} img="minerals/bor.jpg" />
      <SingleProductCapsule name="Chromium" type="minerals" caps={60} price={6} img="minerals/chromium.jpg" />
      <SingleProductCapsule name="Electrolyte" type="minerals" caps={60} price={6} img="minerals/electrolyte.jpg" />
      <SingleProductCapsule name="Iron" type="minerals" caps={60} price={6} img="minerals/iron.jpg" />
      <SingleProductCapsule name="Zinc" type="minerals" caps={60} price={6} img="minerals/zinc.jpg" />

      <SingleProductCapsule name="Omega-3" type="vitamins" caps={60} price={6} img="vitamin/omega-3-90caps.jpg" />
      <SingleProductCapsule name="Vitamin D3" type="vitamins" caps={60} price={6} img="vitamin/vitamin-d3.jpg" />
      <SingleProductCapsule name="Vitamin B12" type="vitamins" caps={60} price={6} img="vitamin/vitamin-b12.jpg" />
      <SingleProductCapsule name="Vitamin C" type="vitamins" caps={60} price={6} img="vitamin/vitamin-c.jpg" />
    </div>
  );
};

export default Products;
