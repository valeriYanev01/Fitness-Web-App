import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { ProductTypeContext } from "../../context/Store Page/ProductTypeContext";
import Loading from "../Loading";
import "./Products.css";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [loadProducts, setLoadProducts] = useState(false);

  const { type } = useContext(ProductTypeContext);

  useEffect(() => {
    setLoaded(false);

    axios.get("https://backend-ten-bice.vercel.app/api/products", { params: { type: type } }).then((data) => {
      setProducts(data.data.getProducts);
      setLoaded(true);
      setLoadProducts(true);
    });
  }, [type, loadProducts]);

  return (
    <div className="products-container">
      {type == "protein" ? (
        <div className="store-single-product-introduction">
          Whey protein is a high-quality protein derived from milk during the cheese-making process. It contains a
          complete amino acid profile, including essential amino acids that the body cannot produce on its own. This
          makes whey protein an excellent source of protein for muscle building, repair, and overall health.
          <br />
          <br />
          One of the key reasons whey protein is highly regarded is its rapid absorption by the body. It provides a
          quick influx of amino acids to the muscles, making it an ideal choice for both pre and post-workout
          supplementation. This swift absorption helps kickstart the muscle recovery process after exercise and promotes
          the synthesis of new muscle proteins.
          <br />
          <br />
          Beyond muscle support, whey protein has additional health benefits. It may aid in weight management by
          promoting satiety and assisting in fat loss while preserving lean muscle mass. Whey protein also contains
          bioactive peptides that can help support the immune system.
        </div>
      ) : type == "creatine" ? (
        <div className="store-single-product-introduction">
          Creatine is a naturally occurring compound found in small amounts in certain foods and synthesized by the
          body. As a popular and well-researched supplement, creatine is widely used in the fitness world for its
          ability to enhance athletic performance.
          <br />
          <br />
          When taken as a supplement, creatine increases the body's phosphocreatine stores, which play a crucial role in
          the rapid production of adenosine triphosphate (ATP) – the primary energy currency of cells. This, in turn,
          helps improve short-duration, high-intensity activities like weightlifting and sprinting.
          <br />
          <br />
          Creatine has been shown to increase muscle strength, power, and overall exercise performance. It also aids in
          muscle recovery by reducing exercise-induced inflammation and promoting water retention within muscle cells,
          enhancing their size.
          <br />
          <br />
          This supplement is particularly beneficial for activities that involve short bursts of intense effort, making
          it a staple for many athletes and fitness enthusiasts. Its safety and effectiveness have been extensively
          studied, making creatine a reliable and widely embraced option to support performance gains in various sports
          and fitness pursuits.
        </div>
      ) : type == "bcaa" ? (
        <div className="store-single-product-introduction">
          Branched-Chain Amino Acids (BCAAs) are a group of essential amino acids, including leucine, isoleucine, and
          valine, crucial for muscle protein synthesis and energy production. Unlike other amino acids, BCAAs are
          metabolized directly in muscles rather than the liver, making them readily available for energy during
          exercise.
          <br />
          <br />
          BCAAs play a pivotal role in reducing muscle soreness and fatigue, promoting faster recovery after workouts.
          Leucine, in particular, stimulates muscle protein synthesis, aiding in the building and repair of muscle
          tissues. Isoleucine and valine contribute to energy production and regulate glucose uptake during exercise.
          <br />
          <br />
          Supplementing with BCAAs is common among athletes and fitness enthusiasts, especially during intense training
          or periods of calorie restriction. The convenient form of BCAA supplements ensures a quick and efficient
          delivery of these essential amino acids to the muscles, supporting muscle growth, reducing muscle breakdown,
          and improving overall exercise performance.
        </div>
      ) : type == "carbohydrate" ? (
        <div className="store-single-product-introduction">
          Carbohydrates are one of the three macronutrients, alongside proteins and fats, and serve as the primary
          source of energy for the body. They come in various forms, including sugars, starches, and fibers. When
          consumed, carbohydrates are broken down into glucose, which is utilized by cells for energy production.
          <br />
          <br />
          There are two main types of carbohydrates: simple carbohydrates (sugars) and complex carbohydrates (starches
          and fibers). Simple carbs provide a quick energy boost, while complex carbs offer sustained energy release.
          <br />
          <br />
          Carbohydrates are essential for various bodily functions, with a primary role in fueling the brain and
          supporting physical activities. Adequate carbohydrate intake is crucial for optimal athletic performance, as
          they replenish glycogen stores in muscles and liver.
          <br />
          <br />
          While it's important to choose complex carbohydrates from sources like whole grains, fruits, and vegetables
          for sustained energy and nutritional benefits, the overall balance of carbohydrates in the diet plays a
          critical role in maintaining energy levels, supporting metabolic health, and promoting overall well-being.
        </div>
      ) : type == "minerals" ? (
        <div className="store-single-product-introduction">
          Minerals are inorganic elements crucial for a range of physiological functions in the body. They can be
          divided into two categories: major minerals, required in larger amounts (e.g., calcium, potassium, magnesium),
          and trace minerals, needed in smaller quantities (e.g., iron, zinc, copper).
          <br />
          <br />
          These elements serve as essential components of enzymes, hormones, and body structures, contributing to
          processes such as bone formation, nerve function, and fluid balance. Minerals play a vital role in maintaining
          pH levels, conducting nerve impulses, and supporting the transport of oxygen in the blood.
          <br />
          <br />
          While minerals are primarily obtained through a balanced diet, factors like soil quality and food processing
          methods can impact their availability. Deficiencies or excesses of minerals can lead to various health issues.
          For example, calcium deficiency may affect bone health, while excessive sodium intake can contribute to high
          blood pressure.
          <br />
          <br />
          Ensuring a diverse and nutrient-rich diet is essential for meeting mineral requirements, and supplements may
          be recommended in cases of deficiency or specific health conditions. In summary, minerals are integral to
          various physiological functions, and maintaining an optimal balance is crucial for overall health and
          well-being.
        </div>
      ) : type == "vitamins" ? (
        <div className="store-single-product-introduction">
          Vitamins are essential organic compounds required in small amounts to sustain various physiological functions
          and maintain overall health. Classified into water-soluble (e.g., vitamin C, B-complex) and fat-soluble (e.g.,
          vitamins A, D, E, K), each vitamin plays a specific role in processes such as energy metabolism, immune
          function, and bone health.
          <br />
          <br />
          Vitamins act as coenzymes or cofactors, facilitating enzymatic reactions in the body. They are obtained
          through a balanced diet, as the body cannot produce adequate amounts of most vitamins independently.
          <br />
          <br />
          Deficiencies or excesses of vitamins can lead to health issues. For instance, vitamin C deficiency may cause
          scurvy, while excessive vitamin A intake can be toxic. A varied and nutrient-rich diet is crucial to ensure
          sufficient vitamin intake, but supplements may be recommended when dietary requirements are not met.
        </div>
      ) : null}
      <p className="products-heading">Products:</p>
      <div className="products">
        {!loaded ? (
          <Loading />
        ) : (
          <>
            {products.map((product) => (
              <div key={product._id} className="product-container">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <div className="product-information">
                    <p className="products-name">Name: {product.name}</p>
                    <p className="products-price">Price: {product.price} EUR</p>
                    {product.weight ? (
                      <p className="products-weight">Weight: {product.weight} g</p>
                    ) : (
                      <p className="products-weight">Capsules: {product.capsules}</p>
                    )}
                    {product.taste && <p className="products-taste">Taste: {product.taste}</p>}
                    <Link className="product-seemore" to={`/store/${product.type}/${product._id}`}>
                      More
                    </Link>
                  </div>
                  <img className="products-img" src={product.img} />
                </div>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default Products;
