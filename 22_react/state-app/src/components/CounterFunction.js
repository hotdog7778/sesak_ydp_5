import { useState } from 'react';

const CounterFunction = (props) => {
  const [number, setNumber] = useState(0);
  //const onClickEnter = () => setNumber(number + 1);
  const { value } = props;

  return (
    <div>
      <h1>{number}</h1>
      <button
        onClick={() => {
          setNumber(number + 1);
        }}
      >
        {value}
      </button>
    </div>
  );
};

export default CounterFunction;
