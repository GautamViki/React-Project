import styles from "./Items.module.css";
export const Item = (props) => {
  return (
    <li className={`${styles['kg-item']} list-group-item`}>
      <span className={`${styles['kg-span']}`}>{props.foodItem}</span>
    </li>
  );
};
