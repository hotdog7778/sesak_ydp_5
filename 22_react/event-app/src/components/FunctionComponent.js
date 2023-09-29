import { useState } from 'react';

const FunctionComponent = () => {
  const [age, setAge] = useState(31)

  const consoleLogE = (e) => {
    console.log(e)
  }

  const oneMoreAge = (e, name) => {
    setAge(age + 1)
    console.log(`${name}님 한살 추가요 ${age}세 입니다.`)
    console.log(e)
  }
  
  return (
    <div>
      <h1>FunctionComponent</h1>
      <button onClick={function(e) { consoleLogE(e)}}>합성 이벤트 객체 보내기</button>
      <button onClick={(e) => { consoleLogE(e)}}>합성 이벤트 객체 보내기</button>

      {/* 인자를 전달하는 방법 */}
      <h3>{age} 살</h3>
      <button onClick={oneMoreAge.bind(null, '김태균')}>한살더 먹어</button>
      <button onClick={function() {oneMoreAge('김태균')}}>한살더 먹어</button>
      <button onClick={() => oneMoreAge('김태균')}>한살더 먹어</button>

      {/* 인자 + 합성이벤트객체 를 전달하는 방법 */}
      <button onClick={function(e) {oneMoreAge(e, '김태균')}}>한살더 먹어</button>
      <button onClick={(e) => oneMoreAge(e, '김태균')}>한살더 먹어</button>
    </div>
  );
};

export default FunctionComponent;
