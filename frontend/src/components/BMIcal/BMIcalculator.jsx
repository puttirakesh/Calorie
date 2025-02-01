import HealthChart from '../healthchart/HealthChart';
import React, { useState } from 'react';

function BMIcalculator() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBMI] = useState(null);
  const [feedback, setFeedback] = useState('');

  const calculateBMI = () => {
    const weightInKg = parseFloat(weight);
    const heightInM = parseFloat(height) / 100; 
    const bmiValue = weightInKg / (heightInM * heightInM);
    setBMI(bmiValue.toFixed(2));

    if (bmiValue < 18.5) {
      setFeedback('Underweight');
    } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
      setFeedback('Normal weight');
    } else if (bmiValue >= 25 && bmiValue < 29.9) {
      setFeedback('Overweight');
    } else {
      setFeedback('Obese');
    }
  };

  return (
      <>
    <div className="mx-auto max-w-md p-6 rounded-lg shadow-lg bg-white mt-16">
      <h2 className="text-2xl font-bold mb-4">BMI Calculator</h2>
      <div className="mb-4">
        <label className="block text-gray-700">Weight (kg): </label>
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Height (cm): </label>
        <input
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200"
        />
      </div>
      <button
        onClick={calculateBMI}
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
        Calculate BMI !
      </button>
      {bmi !== null && <p className="mt-4 text-black">Your BMI is: {bmi}</p>}
      {feedback && <p className="mt-2 text-black">{`You are ${feedback}`}</p>}

    <div>
      {bmi && <HealthChart bmi={bmi}/>}
    </div>
    </div>
    </>
  );
}

export default BMIcalculator;
