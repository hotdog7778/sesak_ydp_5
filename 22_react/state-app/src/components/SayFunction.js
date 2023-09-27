import { useState } from 'react';

const SayFunction = () => {
  console.log(useState('welcome!'));

  const [message, setMessage] = useState('welcome');
  // message : 메세지(welcome)의 상태
  // setMessage : 메세지(welcome)의 상태 값을 바꾸는 함수

  const onClickEnter = () => {
    setMessage('Hi!');
  };
  const onClickLeave = () => {
    setMessage('Bye!');
  };

  return (
    <div>
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeave}>퇴장</button>
      <h1>{message}</h1>
    </div>
  );
};

export default SayFunction;
