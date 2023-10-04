import React, {useRef, useState} from 'react'

export default function RefSample2() {

  const id = useRef(7);
  const [number, setNumber] = useState(10);

  const plusIdRef = () => {
    id.current += 1;
    console.log(id)
  };

  const plusNumState = () => setNumber(number + 1)

  return (
    <div>
        <p>함수형 컴포넌트에서 버튼 클릭시 id 값을 1씩 증가 처리</p>
        <h2>{id.current}</h2>
        <button onClick={plusIdRef}>plus</button>

        <p>state를 변경해서 리렌더링 확인</p>
        <h2>{number}</h2>
        <button onClick={plusNumState}>plus</button>
    </div>
  )
}
