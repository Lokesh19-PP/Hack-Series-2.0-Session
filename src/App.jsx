import React from "react";
import { useState } from "react";

export const App = () => {
  const [counter, setCounter] = React.useState(0);
  const addNumber = () => {
    setCounter(counter + 4);
  };
  const removeNumber = () => {
    setCounter(counter - 4);
  };
  return (
    <>
      <h1>HackSeries with React!</h1>
      <h2>count value : {counter}</h2>
      <button onClick={addNumber}>Add Number</button>
      <br />
      <button onClick={removeNumber}>Remove Number</button>
      <br />
    </>
  );
};

export default App;
