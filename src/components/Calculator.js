import React, { useState } from "react";

import TextInput from "./TextInput";
import Button from "./Button";

const Calculator = () => {
  const [weight, setWeight] = useState();
  const [height, setHeight] = useState();
  const [bmi, setBmi] = useState();
  const [bmiClass, setBmiClass] = useState();

  const handleHeightChange = (event) => setHeight(event.target.value);
  const handleWeightChange = (event) => setWeight(event.target.value);

  const computeBmi = () => {
    let bmiValue = (weight / (height / 100) ** 2).toFixed(2);
    setBmi(bmiValue);
    let bmiClass = getBmi(bmiValue);
    setBmiClass(bmiClass);
    setHeight("")
    setWeight("")
  };

  const getBmi = (bmi) => {

    if (bmi < 18.5) {
      return "Untergewicht";
    }
    if (bmi >= 18.5 && bmi < 24.9) {
      return "Normalbereich";
    }
    if (bmi >= 25 && bmi < 29.9) {
      return "Übergewicht";
    }
    if (bmi >= 30) {
      return "Starkes Übergewicht";
    }
  };

  return (
    <form className="calculator-form">
      <h1 className="calculator-headline text-light">BMI-Rechner</h1>

      <TextInput
      placeholder="Körpergröße in cm"
      handleChange={handleHeightChange}
      value={height}
      />

      <TextInput
      placeholder="Körpergewicht in kg"
      handleChange={handleWeightChange}
      value={weight}
      />

      <Button label={isNaN(bmi)?"Berechnen":"Zurücksetzen"} onClick={computeBmi} />

      {
        isNaN(bmi)?null:
        <div className="result-group">
          <strong className="result-headline">Dein BMI:</strong>
          <span className="result-bmi">{bmi}</span>
          <span className="result-text">({bmiClass})</span>
        </div>
      }
    </form>
  );
};

export default Calculator;
