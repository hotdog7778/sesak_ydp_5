import React, {useState, useMemo} from 'react'

export default function UseMemoEx() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState('');

// [before]  
//   const calc = () => {
//     console.log('calc함수 실행중')
//     for (let i = 0; i<100000000; i++) {
//     }

//     return count ** 2;
//   }
  
// [after]
  const calc = useMemo(() => {
    console.log('calc함수 실행중')
    for (let i = 0; i<100000000; i++) {
    }

    return count ** 2;
  }, [count])

  return (
    <div>
        <h1>UseMemoEx</h1>
        
        <input type="text" value={input} onChange={(e)=>{ setInput(e.target.value)}}/>
        <button onClick={() => setCount(() => count + 1)}>Plus</button>
        <p>count: {count}</p>
        {/* <p>calc: {calc()}</p> */}
        <p>calc: {calc}</p>
    </div>
  )
}
