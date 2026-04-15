import React from "react";
const Counter = ({ counter, addNumber, removeNumber }) => {
  return (
    <>
      <h2>Counter value : {counter}</h2>
      <button onClick={addNumber}>Add Number</button>

      <br />
      <button onClick={removeNumber}>Remove Number {counter}</button>

      <p>footer : {counter}</p>
    </>
  );
};
export default Counter;
