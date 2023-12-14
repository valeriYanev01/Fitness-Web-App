import React from "react";
import "./Home.css";
import Price from "../components/homeComponents/Price";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-page">
      <header>
        <img src="Images/Home-Header.jpg" className="header-img" />
        <section>
          <h2 className="home-section-motto">
            <span className="home-section-motto-first">Transform the Body, Transcend the Mind</span>
            <br />
            <span className="home-section-motto-second">
              Forge Your Strength, Define Your Limits, Conquer Your Goals.
            </span>
          </h2>

          <div className="home-section-prices">
            <Price cName={"silver"} name={"MindCraft Silver"} price={50} content={"Gym"} link={"/"} />
            <Price cName={"gold"} name={"MindCraft Gold"} price={70} content={"Gym and Spa"} link={"/"} />
            <Price cName={"platinum"} name={"MindCraft Platinum"} price={80} content={"All Activities"} link={"/"} />
          </div>
        </section>
      </header>

      <section className="home-introduction">
        <h1>MindCraft Fitness Club</h1>
        <p>
          Welcome to MindCraft Fitness Club – Where Fitness Meets Progress! At our gym, we believe that a healthier,
          stronger you is just a workout away. Discover a fitness community dedicated to helping you achieve your goals,
          whether you're aiming to build muscle, lose weight, or enhance your overall well-being. Our state-of-the-art
          facilities, expert trainers, and diverse range of classes are tailored to meet every fitness level. Join us on
          a journey of empowerment, where every drop of sweat brings you closer to your best self. Let's make your
          fitness dreams a reality. Begin your transformation with MindCraft Fitness today!
        </p>
        <Link to="/" className="home-section-intro-link">
          Learn More
        </Link>
      </section>
    </div>
  );
};

export default Home;
