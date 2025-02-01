import React, { useState, useEffect } from 'react';

const CalorieCalculator = () => {
    const [totalCalories, setTotalCalories] = useState(0);

    useEffect(() => {
        const checkboxes = document.querySelectorAll('.food-checkbox');

        checkboxes.forEach(checkbox => {
            checkbox.addEventListener('change', () => {
                let calories = 0;
                checkboxes.forEach(item => {
                    if (item.checked) {
                        calories += parseInt(item.getAttribute('data-calories'), 10);
                    }
                });
                setTotalCalories(calories);
            });
        });

        return () => {
            checkboxes.forEach(checkbox => {
                checkbox.removeEventListener('change', () => {});
            });
        };
    }, []);

    return (
        <div className="bg-gray-100 min-h-screen py-8">
            <h1 className="text-center text-3xl mb-6 font-semibold">Calorie Calculator</h1>
            <div className="container mx-auto grid grid-cols-2 gap-6">
                <div className="food-category bg-white rounded-lg p-6 shadow-md">
                    <h2 className="text-xl font-semibold mb-4">Healthy Foods</h2>
                    <ul className="food-list flex justify-between">
                        <div>

                        <li className="mb-2">
                            <input type="checkbox" id="apple" className="food-checkbox" data-calories="52" />
                            <label htmlFor="apple" className="ml-2">Apple</label>
                        </li>
                        <li className="mb-2">
                            <input type="checkbox" id="Carrot" className="food-checkbox" data-calories="41" />
                            <label htmlFor="Carrot" className="ml-2">Carrot</label>
                        </li>
                        <li className="mb-2">
                            <input type="checkbox" id="Broccoli" className="food-checkbox" data-calories="55" />
                            <label htmlFor="Broccoli" className="ml-2">Broccoli</label>
                        </li>
                        <li className="mb-2">
                            <input type="checkbox" id="ChickenBreast" className="food-checkbox" data-calories="165" />
                            <label htmlFor="ChickenBreast" className="ml-2">ChickenBreast</label>
                        </li>
                        <li className="mb-2">
                            <input type="checkbox" id="Salmon" className="food-checkbox" data-calories="175" />
                            <label htmlFor="Salmon" className="ml-2">Salmon</label>
                        </li>
                        <li className="mb-2">
                            <input type="checkbox" id="Banana" className="food-checkbox" data-calories="89" />
                            <label htmlFor="Banana" className="ml-2">Banana</label>
                        </li>
                        <li className="mb-2">
                            <input type="checkbox" id="Capsicum" className="food-checkbox" data-calories="49" />
                            <label htmlFor="Capsicum" className="ml-2">Capsicum</label>
                        </li>
                        <li className="mb-2">
                            <input type="checkbox" id="Cauliflower" className="food-checkbox" data-calories="62" />
                            <label htmlFor="Cauliflower" className="ml-2">Cauliflower</label>
                        </li>
                        </div>
                        <div>
                            <img src="./healthy.jpg" alt="" height="450px" width="450px"/>
                        </div>
                    </ul>
                </div>
                <div className="food-category bg-white rounded-lg p-6 shadow-md">
                    <h2 className="text-xl font-semibold mb-4">Unhealthy Foods</h2>
                    <ul className="food-list flex justify-between">
                        <div>

                        <li className="mb-2">
                            <input type="checkbox" id="pizza" className="food-checkbox" data-calories="285" />
                            <label htmlFor="pizza" className="ml-2">Pizza</label>
                        </li>
                        <li className="mb-2">
                            <input type="checkbox" id="Burger" className="food-checkbox" data-calories="354" />
                            <label htmlFor="Burger" className="ml-2">Burger</label>
                        </li>
                        <li className="mb-2">
                            <input type="checkbox" id="Frenchfries" className="food-checkbox" data-calories="312" />
                            <label htmlFor="Frenchfries" className="ml-2">Frenchfries</label>
                        </li>
                        <li className="mb-2">
                            <input type="checkbox" id="Noodles" className="food-checkbox" data-calories="210" />
                            <label htmlFor="Noodles" className="ml-2">Noodles</label>
                        </li>
                        <li className="mb-2">
                            <input type="checkbox" id="CheeseBurger" className="food-checkbox" data-calories="389" />
                            <label htmlFor="CheeseBurger" className="ml-2">CheeseBurger</label>
                        </li>
                        <li className="mb-2">
                            <input type="checkbox" id="BreadPacoda" className="food-checkbox" data-calories="295" />
                            <label htmlFor="BreadPacoda" className="ml-2">BreadPakoda</label>
                        </li>
                        <li className="mb-2">
                            <input type="checkbox" id="Doughnut" className="food-checkbox" data-calories="285" />
                            <label htmlFor="Doughnut" className="ml-2">Doughnut</label>
                        </li>
                        <li className="mb-2">
                            <input type="checkbox" id="cake" className="food-checkbox" data-calories="257" />
                            <label htmlFor="cake" className="ml-2">Cake</label>
                        </li>
                        </div>
                        <div>
                            <img src="./unhealthy.jpg" alt="" height="400px" width="400px"/>
                        </div>
                    </ul>
                </div>
            </div>
            <div className="result mt-8 text-center">
                <h2 className="text-xl font-semibold mb-2">Total Calories:</h2>
                <p id="total-calories" className="text-3xl font-bold text-red-600">{totalCalories}</p>
            </div>
        </div>
    );
};

export default CalorieCalculator;
