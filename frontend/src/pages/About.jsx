import React, { useContext } from "react";
import AboutPrices from "../components/aboutComponents/AboutPrices";
import AboutFeatures from "../components/aboutComponents/AboutFeatures";
import "./About.css";
import { ChangeBgContext } from "../context/ChangeBgContext";

const About = () => {
  const { selectedItem } = useContext(ChangeBgContext);

  return (
    <div className="about-container">
      <section className="section">
        <h2 className="section-title">Gym monthly subscription:</h2>

        <div className="card-container">
          <div className={selectedItem == "silver" ? "selected" : ""}>
            <AboutPrices
              heading={"Mindcraft Silver"}
              price={50}
              benefits={"24/7 Access to Gym Area"}
              description={
                "Experience the basics of MindCraft with our Silver membership. Gain unlimited access to our cutting-edge gym facilities, including top-of-the-line equipment and dedicated workout spaces. Perfect for those looking to kickstart their fitness journey with flexibility and convenience."
              }
            />
          </div>

          <div className={selectedItem == "gold" ? "selected" : ""}>
            <AboutPrices
              heading={"Mindcraft Gold"}
              price={70}
              benefits={"24/7 Access to Gym and Spa"}
              description={
                "Elevate your gym experience with our Gold membership. In addition to all the perks of the Silver membership, enjoy access to our luxurious spa facilities, where you can unwind and rejuvenate after a rewarding workout session. It's the ultimate blend of fitness and relaxation for those seeking a holistic approach to well-being."
              }
            />
          </div>

          <div className={selectedItem == "platinum" ? "selected" : ""}>
            <AboutPrices
              heading={"Mindcraft Platinum"}
              price={80}
              benefits={"24/7 Access to All Activities"}
              description={
                "Unlock the full potential of MindCraft with our Platinum membership. Dive deep into a world of wellness with unlimited access to all our activities, including gym, spa, swimming, and more. Experience unparalleled convenience and luxury as you pursue your fitness goals with us."
              }
            />
          </div>
        </div>
      </section>

      <div className="separator"></div>

      <section className="section">
        <h2 className="section-title">Gym Features:</h2>

        <div className="feature-container">
          <div className={selectedItem == "fitness" ? "selected" : ""}>
            <AboutFeatures
              title="Fitness Area"
              description="Explore our expansive fitness area equipped with state-of-the-art machines and equipment, catering to all fitness levels and goals. Whether you're into strength training, cardio, or functional workouts, our diverse range of equipment and dedicated spaces ensure you have everything you need to achieve your fitness aspirations."
            />
          </div>
          <div className={selectedItem == "trainers" ? "selected" : ""}>
            <AboutFeatures
              title="Expert Guidance"
              description="Our team of personal trainers is available for personalized training sessions and fitness assessments tailored to your needs and goals. Additionally, our nutritionists provide expert advice and guidance on nutrition and dietary planning to complement your fitness journey and optimize results."
            />
          </div>
          <div className={selectedItem == "spa" ? "selected" : ""}>
            <AboutFeatures
              title="Relaxation"
              description="Indulge in relaxation and pampering at our spa facilities, featuring a range of treatments and services to help you unwind and rejuvenate after a rewarding workout session."
            />
          </div>
          <div className={selectedItem == "swimming" ? "selected" : ""}>
            <AboutFeatures
              title="Swimming"
              description="Dive into fitness in our indoor swimming pool, boasting a length of 25 meters. Whether you're looking for a low-impact workout or want to improve your swimming skills, our pool provides the perfect environment for aquatic fitness and recreation."
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
