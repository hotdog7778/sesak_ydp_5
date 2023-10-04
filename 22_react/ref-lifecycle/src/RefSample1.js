import React, {useRef} from 'react'

export default function RefSample1() {
  
  const inputRef = useRef();
  
  const handleFocus = () => {
    console.log(inputRef.current)
    
    // focus(): 지정된 html 요소에 포커싱
    inputRef.current.focus()
  }

  return (
    <div>
        <p>함수형 컴포넌트에서 버튼 클릭시 인풋에 포커싱 처리</p>
        <input type='text' ref={inputRef}></input>
        <button onClick={handleFocus}>Focus</button>
    </div>
  )
}
