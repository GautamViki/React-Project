import styles from "./Items.module.css";
export const Item = ({ foodItem }) => {
  const handleBuyItems = (event, foodItem) => {
    console.log(event);
    return console.log(foodItem, "bought");
  };
  return (
    <li className={`${styles["kg-item"]} list-group-item`}>
      <span className={`${styles["kg-span"]}`}>{foodItem}</span>
      <button
        className={`${styles.button} btn btn-info`}
        onClick={(event) => handleBuyItems(event, foodItem)}
      >
        buy
      </button>
    </li>
  );
};
