import { useState } from 'react';

const ColorChange = () => {
  const [state, setState] = useState('black');

  let btnColorObj = {
    color: state,
  };

  const changeRed = () => {
    setState('red');
  };
  const changeBlue = () => {
    setState('blue');
  };

  return (
    <div>
      <h1 style={btnColorObj}>검정색 글씨</h1>
      <button onClick={changeRed}>빨간색</button>
      <button onClick={changeBlue}>파란색</button>
    </div>
  );
};

export default ColorChange;
