import { useState } from "react";

const User = ({ name }) => {
  const [count, setCount] = useState(0);
  const countIncrement = () => {
    setCount(count + 1);
  };
  return (
    <div className="user-card">
      <button onClick={countIncrement}>Count: {count}</button>
      <h2>Name: {name}</h2>
      <h3>Place: Naidupeta</h3>
      <h4>github:https://github.com/Bhargav-Kalangi</h4>
    </div>
  );
};
export default User;
