import { useState } from 'react';

const FuncComponentPrac1 = () => {
  const [message, setMessage] = useState('0');

  const numIncrease = () => {
    setMessage(Number(message) + 1);
  };
  const numDecrease = () => {
    setMessage(Number(message) - 2);
  };

  return (
    <>
      <h1>{message}</h1>
      <button onClick={numIncrease}>+1</button>
      <button onClick={numDecrease}>-2</button>
    </>
  );
};

export default FuncComponentPrac1;
