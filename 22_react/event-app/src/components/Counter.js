import { useState } from 'react';

const Counter = () => {
  const [number, setNumber] = useState(0);

  const increase = () => {
    setNumber(number + 1);
  };

  const alertMsg = (msg) => {
    alert(`${msg} ~ 현재 숫자는 ${number} 입니다.`);
  };

  const consoleMsg = (e, msg) => {
    console.log(e.target);
    console.log(`${msg} ~ 현재 숫자는 ${number} 입니다.`);
  };
  const handleEvent = (e, msg) => {
    console.log('e.target >>', e.target);
    console.log('e.currentTarget', e.currentTarget);
    console.log(`${msg} ~ 현재 숫자는 ${number} 입니다.`);
    /*
    e.target 은 부모로부터 이벤트가 위임되어 발생하는 자식의 위치
    e.currentTarget 은 부모 포함
    */
  };

  return (
    <div>
      <h1>Number Count</h1>
      <h1>{number}</h1>

      {/* 함수에 인자가 없는 경우 */}
      <button onClick={increase}>더하기</button>
      <br />

      {/* 함수에 인자를 전달할 경우 */}
      <button onClick={() => alertMsg('hello')}>alert 출력</button>
      <br />

      {/* 함수에 인자 전달 + 합성이벤트 전달 */}
      <button onClick={(e) => consoleMsg(e, 'hello')}>console 출력</button>
      <br />

      {/* e.target vs e.currentTarget */}
      <button onClick={(e) => handleEvent(e, 'hello')}>
        <span>handle Event</span>
      </button>

      <br />
    </div>
  );
};

export default Counter;
