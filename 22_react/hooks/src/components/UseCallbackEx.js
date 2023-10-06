import React, {useState, useCallback} from 'react'

// useCallback - 매번 함수를 생성하지 않고 기억해두었다가 필요할때 마다 재사용할 목적
export default function UseCallbackEx() {
    const [text, setText] = useState('')
    
    // [before]
    // function changeText(e) {
    //     setText(e.target.value);
    // }

    // [after]
    // 컴포넌트가 리렌더링 되어도, 의존성 배열의 값이 바뀌지 않으면 이 함수를 재사용
    const changeText = useCallback((e) => {
        setText(e.target.value);
    }, [])

    return (
    <div>
        <h1>UseCallbackEx</h1>
        <input type="text" onChange={changeText}/>
        <div>작성한 값: {text || '없음'}</div>
    </div>
  )
}
