import React, { useState } from "react";
import Counter from "./Counter";

const App = () => {
  const [count, setCount] = useState(0);

  const addNumber = () => {
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
  };

  const removeNumber = () => {
    setCount((prev) => prev - 1);
  };

  return (
    <>
      <h1>Hackseries with React</h1>
      <Counter
        counter={count}
        addNumber={addNumber}
        removeNumber={removeNumber}
      />
    </>
  );
};

export default App;
