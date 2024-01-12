import React from "react";
import SingleProductWeight from "../../components/storeComponents/SingleProductWeight";

const Protein = () => {
  return (
    <div className="gallery-container">
      <SingleProductWeight
        name="Whey Protein"
        img="protein/1k-white-chocolate-coconut-protein.png"
        price={25}
        weight={1000}
        taste="White Chocolate Coconut"
      />
      <SingleProductWeight
        name="Whey Protein"
        img="protein\1kg-blueberry-protein.png"
        price={25}
        weight={1000}
        taste="Blueberry"
      />
      <SingleProductWeight
        name="Whey Protein"
        img="protein\1kg-chocolate-protein.png"
        price={25}
        weight={1000}
        taste="Chocolate"
      />
      <SingleProductWeight
        name="Whey Protein"
        img="protein\1kg-saltedcaramel-protein.png"
        price={25}
        weight={1000}
        taste="Salted Caramel"
      />
      <SingleProductWeight
        name="Whey Protein"
        img="protein\1kg-vanilla-ice-cream-protein.png"
        price={25}
        weight={1000}
        taste="Vanilla Ice Cream"
      />
      <SingleProductWeight
        name="Whey Protein"
        img="protein\1kg-unflavored-protein.png"
        price={25}
        weight={1000}
        taste="Unflavored"
      />

      <SingleProductWeight
        name="Whey Protein"
        img="protein\2kg-blueberry-protein.png"
        price={38}
        weight={2000}
        taste="Blueberry"
      />

      <SingleProductWeight
        name="Whey Protein"
        img="protein\2kg-chocolate-protein.png"
        price={38}
        weight={2000}
        taste="Chocolate"
      />
      <SingleProductWeight
        name="Whey Protein"
        img="protein\2kg-saltedcaramel-protein.png"
        price={38}
        weight={2000}
        taste="Salted Caramel"
      />
      <SingleProductWeight
        name="Whey Protein"
        img="protein\2kg-unflavored-protein.png"
        price={38}
        weight={2000}
        taste="Unflavored"
      />
      <SingleProductWeight
        name="Whey Protein"
        img="protein\2kg-vanilla-ice-cream-protein.png"
        price={38}
        weight={2000}
        taste="Vanilla Ice Cream"
      />
      <SingleProductWeight
        name="Whey Protein"
        img="protein\2kg-white-chocolate-coconut-protein.png"
        price={38}
        weight={2000}
        taste="White Chocolate Coconut"
      />
    </div>
  );
};

export default Protein;
