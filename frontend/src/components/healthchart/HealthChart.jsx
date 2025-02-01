import React from 'react';

function HealthChart({ bmi }) {
  const getMealSuggestions = (bmiValue) => {
    if (bmiValue < 18.5) {
      return [
        'Breakfast: Whole grain toast with avocado and poached eggs',
        'Lunch: Quinoa salad with mixed vegetables and grilled chicken',
        'Dinner: Baked salmon with sweet potato and steamed broccoli',
        'Snacks: Greek yogurt with berries, nuts, and a drizzle of honey'
      ];
    } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
      return [
        'Breakfast: Oatmeal with sliced bananas and almonds',
        'Lunch: Grilled chicken salad with mixed greens and balsamic vinaigrette',
        'Dinner: Stir-fried tofu with vegetables and brown rice',
        'Snacks: Apple slices with peanut butter'
      ];
    } else if (bmiValue >= 25 && bmiValue < 29.9) {
      return [
        'Breakfast: Whole grain cereal with low-fat milk',
        'Lunch: Turkey sandwich on whole wheat bread with lettuce and tomato',
        'Dinner: Spaghetti with marinara sauce and a side salad',
        'Snacks: Carrot sticks with hummus'
      ];
    } else {
      return [
        'Breakfast: Vegetable omelet with spinach, mushrooms, and bell peppers',
        'Lunch: Quinoa and black bean salad with avocado',
        'Dinner: Grilled shrimp with quinoa and roasted vegetables',
        'Snacks: Edamame and cherry tomatoes'
      ];
    }
  };

  return (
    <div className="bg-black p-6 rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold mb-4">Meal Suggestions</h2>
      {bmi && (
        <div>
          <p className="text-lg font-medium mb-2">Based on your BMI, here are some meal suggestions:</p>
          <ul className="list-disc list-inside">
            {getMealSuggestions(bmi).map((meal, index) => (
              <li key={index} className="mb-2">{meal}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default HealthChart;
