import React,{ useReducer } from 'react'

const initState = { value: 0 }; // 초기 상태값

const reducer = (prevState, action) => {
    switch (action.type) {
        case 'INCREMENT':
          return { value: prevState.value + 1}
        case 'DECREMENT':
          return { value: prevState.value - 1}
        case 'RESET':
          return initState;
        default: 
          return { value: prevState.value};
    }
}

export default function UseReducer() {
  const [state, dispatch] = useReducer(reducer, initState)
  
  const increment = () => {
    dispatch({type: 'INCREMENT'})  
  }
  const decrement = () => {
    dispatch({type: 'DECREMENT'})  
  }
  const reset = () => {
    dispatch({type: 'RESET'})  
  }

  return (
    <div>
        <h1>UseReducer</h1>
        <h1>{state.value}</h1>
        <button onClick={increment}>플러스</button>
        <button onClick={decrement}>마이너스</button>
        <button onClick={reset}>리셋</button>
    </div>
  )
}
