import { useState } from 'react';

const InvisibleFunc = () => {
  const [state, setState] = useState(true);

  let disableH1 = {
    display: state,
  };

  const deleteH1 = () => {
    if (state === 'none') {
      setState('');
    } else {
      setState('none');
    }
  };

  return (
    <div>
      <button onClick={deleteH1}>사라져라</button>
      <h1 style={disableH1}>안녕하세요</h1>
    </div>
  );
};

export default InvisibleFunc;
