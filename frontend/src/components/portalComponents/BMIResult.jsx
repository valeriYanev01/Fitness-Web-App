import React, { useContext } from "react";
import { CalculatorContext } from "../../context/MyPortal Page/CalculatorContext";
import "./BMIResult.css";

const BMIResult = ({ result }) => {
  const { bmiResultVisibility } = useContext(CalculatorContext);

  return (
    <div className="calculator-bmi-container">
      <div className="calculator-bmi-intro">
        BMI is a measurement of a person's leanness or corpulence based on their height and weight, and is intended to
        quantify tissue mass. It is widely used as a general indicator of whether a person has a healthy body weight for
        their height. Specifically, the value obtained from the calculation of BMI is used to categorize whether a
        person is underweight, normal weight, overweight, or obese depending on what range the value falls between.
      </div>
      <div className="calculator-result">Result: {bmiResultVisibility && result}</div>

      <div>
        <table>
          <tbody>
            <tr>
              <th>Category</th>
              <th>BMI Range - kg/m2</th>
            </tr>
            <tr>
              <td>Severe Thinness</td>
              <td> &lt; 16</td>
            </tr>
            <tr>
              <td>Moderate Thinness</td>
              <td>16 - 17</td>
            </tr>
            <tr>
              <td>Mild Thinness</td>
              <td>17 - 18.5</td>
            </tr>
            <tr>
              <td>Normal</td>
              <td>18.5 - 25</td>
            </tr>
            <tr>
              <td>Overweight</td>
              <td>25 - 30</td>
            </tr>
            <tr>
              <td>Obese Class I</td>
              <td>30 - 35</td>
            </tr>
            <tr>
              <td>Obese Class II</td>
              <td>35 - 40</td>
            </tr>
            <tr>
              <td>Obese Class III</td>
              <td>&gt; 40</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BMIResult;
