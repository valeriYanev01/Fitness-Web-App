import React, { useContext, useState } from "react";
import "./BMICalculator.css";
import { CalculatorContext } from "../../context/MyPortal Page/CalculatorContext";

const BMICalculator = ({ usUnits, setUsUnits, metricUnits, setMetricUnits }) => {
  const [age, setAge] = useState("25");
  const [height, setHeight] = useState(175);
  const [weight, setWeight] = useState(70);
  const [feet, setFeet] = useState(5);
  const [inches, setInches] = useState(9);
  const [pounds, setPounds] = useState(154);

  const { setResult, setBmiResultVisibility } = useContext(CalculatorContext);

  return (
    <div className="bmi-calculator">
      <div className="calculator-units">
        <span
          className={usUnits ? "calculator-units-selected" : ""}
          onClick={() => {
            setMetricUnits(false);
            setUsUnits(true);
          }}
        >
          US Units
        </span>
        <span
          className={`${metricUnits && "calculator-units-selected"}`}
          onClick={() => {
            setUsUnits(false);
            setMetricUnits(true);
          }}
        >
          Metric Units
        </span>
      </div>

      <div className="calculator-container">
        <div className="calculator-age calculator-container-info">
          <span className="calculator-label">Age</span>
          <input
            className="calculator-input"
            value={age}
            id="age"
            onChange={(e) => {
              setAge(e.target.value);
            }}
            type="number"
          />
        </div>
        <div className="calculator-gender calculator-container-info">
          <span className="calculator-label">Gender</span>
          <input
            className="calculator-input-male"
            type="radio"
            name="calculator-gender"
            id="male"
            defaultChecked={true}
          />
          <span className="calculator-label-male">Male</span>

          <input className="calculator-input-female" type="radio" name="calculator-gender" id="female" />
          <span className="calculator-label-female">Female</span>
        </div>

        {metricUnits && (
          <div className="calculator-height calculator-container-info">
            <span className="calculator-label">Height</span>
            <input
              className="calculator-input"
              value={height}
              id="height"
              onChange={(e) => setHeight(e.target.value)}
              type="number"
            />
            <span className="calculator-placeholder">cm</span>
          </div>
        )}

        {usUnits && (
          <div className="calculator-height calculator-container-info">
            <span className="calculator-label">Height</span>
            <input
              className="calculator-input-us-feet"
              type="number"
              id="feet"
              value={feet}
              onChange={(e) => setFeet(e.target.value)}
            />
            <span className="calculator-placeholder-us calculator-placeholder-us-feet">feet</span>

            <input
              className="calculator-input-us-inches"
              type="number"
              id="inches"
              value={inches}
              onChange={(e) => setInches(e.target.value)}
            />
            <span className="calculator-placeholder-us calculator-placeholder-us-inches">inches</span>
          </div>
        )}

        {metricUnits && (
          <>
            <div className="calculator-weight calculator-container-info">
              <span className="calculator-label">Weight</span>
              <input
                className="calculator-input"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                type="number"
                id="kg"
              />
              <span className="calculator-placeholder">kg</span>
            </div>
          </>
        )}

        {usUnits && (
          <div className="calculator-weight calculator-container-info">
            <span className="calculator-label">Weight</span>
            <input
              className="calculator-input"
              type="number"
              value={pounds}
              onChange={(e) => setPounds(e.target.value)}
              id="pounds"
            />
            <span className="calculator-placeholder-us">pounds</span>
          </div>
        )}

        <span
          className="calculator-calculate-btn"
          onClick={() => {
            setBmiResultVisibility(true);
            metricUnits
              ? setResult((weight / Math.pow(height / 100, 2)).toFixed(1))
              : setResult(
                  (
                    (703 * Number(pounds)) /
                    ((parseInt(feet) * 12 + parseInt(inches)) * (parseInt(feet) * 12 + parseInt(inches)))
                  ).toFixed(1)
                );
          }}
        >
          Calculate
        </span>
        <span
          className="calculator-discard-btn"
          onClick={() => {
            setAge("25");
            setHeight("175");
            setWeight(70);
            setGender("male");
            setBmiResultVisibility(false);
          }}
        >
          Discard
        </span>
      </div>
    </div>
  );
};

export default BMICalculator;
