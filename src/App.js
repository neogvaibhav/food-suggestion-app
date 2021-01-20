import React, { useState } from "react";
import "./styles.css";

const breakfast = ["🍞 Bread", "🧈 Butter", "🥚 Egg", "🥪 Sandwich", "🥣 Soup"];

const lunch = [
  "🍙 Rice Ball",
  "🍚 Cooked Rice",
  "🍛 Curry Rice",
  "🍝 Spaghetti",
  "🥫 Canned Food"
];

const dinner = [
  "🥪 Sandwich",
  "🌮 Taco",
  "🌯 Burrito",
  "🍙 Rice Ball",
  "🍱 Bento Box"
];

const fruits = [
  "🍌 Banana",
  "🍍 Pineapple",
  "🥭 Mango",
  "🍎 Red Apple",
  "🍓 Strawberry"
];

const vegetables = [
  "🥒 Cucumber",
  "🥬 Leafy Green",
  "🥦 Broccoli",
  "🧅 Onion",
  "🍄 Mushroom"
];

const snacks = [
  "🍨 Ice Cream",
  "🍩 Doughnut",
  "🍪 Cookie",
  "🍰 Cake",
  "🥧 Pie"
];

export default function App() {
  const [breakfastOptions, setBreakfastOptions] = useState("");
  const [lunchOptions, setLunchOptions] = useState("");
  const [dinnerOptions, setDinnerOptions] = useState("");
  const [fruitsOptions, setFruitsOptions] = useState("");
  const [vegetablesOptions, setVegetablesOptions] = useState("");
  const [snacksOptions, setSnacksOptions] = useState("");

  const updateFood = (optionType, foodOption) => {
    const result = foodOption.map((item, index) => {
      return (
        <p className="foodItem" key={index}>
          {item}
        </p>
      );
    });

    if (optionType === "breakfast") {
      setBreakfastOptions(result);
      setLunchOptions("");
      setDinnerOptions("");
      setFruitsOptions("");
      setVegetablesOptions("");
      setSnacksOptions("");
    } else if (optionType === "lunch") {
      setBreakfastOptions("");
      setLunchOptions(result);
      setDinnerOptions("");
      setFruitsOptions("");
      setVegetablesOptions("");
      setSnacksOptions("");
    } else if (optionType === "dinner") {
      setBreakfastOptions("");
      setLunchOptions("");
      setDinnerOptions(result);
      setFruitsOptions("");
      setVegetablesOptions("");
      setSnacksOptions("");
    } else if (optionType === "fruits") {
      setBreakfastOptions("");
      setLunchOptions("");
      setDinnerOptions("");
      setFruitsOptions(result);
      setVegetablesOptions("");
      setSnacksOptions("");
    } else if (optionType === "vegetables") {
      setBreakfastOptions("");
      setLunchOptions("");
      setDinnerOptions("");
      setFruitsOptions("");
      setVegetablesOptions(result);
      setSnacksOptions("");
    } else if (optionType === "snacks") {
      setBreakfastOptions("");
      setLunchOptions("");
      setDinnerOptions("");
      setFruitsOptions("");
      setVegetablesOptions("");
      setSnacksOptions(result);
    }
  };

  return (
    <div className="App">
      <div id="container">
        <h1 id="mainHead">Food Suggestion</h1>
        <p className="info"> Select the category to get food suggestions</p>
        <div id="btnContainer">
          <button onClick={() => updateFood("breakfast", breakfast)}>
            Breakfast
          </button>
          <button onClick={() => updateFood("lunch", lunch)}>Lunch</button>
          <button onClick={() => updateFood("dinner", dinner)}>Dinner</button>
          <button onClick={() => updateFood("fruits", fruits)}>Fruits</button>
          <button onClick={() => updateFood("vegetables", vegetables)}>
            Vegetables
          </button>
          <button onClick={() => updateFood("snacks", snacks)}>Snacks</button>
        </div>
        <div id="outputContainer">
          {breakfastOptions ? breakfastOptions : null}
          {lunchOptions ? lunchOptions : null}
          {dinnerOptions ? dinnerOptions : null}
          {fruitsOptions ? fruitsOptions : null}
          {vegetablesOptions ? vegetablesOptions : null}
          {snacksOptions ? snacksOptions : null}
        </div>
      </div>
      <footer>
        made with love ❤️ by{" "}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/neogvaibhav"
        >
          Vaibhav
        </a>
      </footer>
    </div>
  );
}
