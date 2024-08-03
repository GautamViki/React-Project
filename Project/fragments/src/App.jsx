import "bootstrap/dist/css/bootstrap.min.css";
import { FoodItems } from "./components/FoodItems";
import { ErrorMessage } from "./components/ErrorMessage";
import "./App.css";
import { FoodInput } from "./components/FoodInput";
// import React from "react";
function App() {
  let foodItems = ["Chicken", "Dal", "Milk", "Butter", "Egg"];
  // let foodItems = [];
  return (
    // <React.Fragment>
    <>
      <h1>Healthy Food</h1>
      {/* conditional rendering */}
      <ErrorMessage items={foodItems} />
      <FoodInput />
      <FoodItems items={foodItems} />

      {/* </React.Fragment > */}
    </>
  );
}
export default App;
