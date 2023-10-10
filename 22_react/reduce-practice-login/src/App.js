import React, {useReducer} from 'react'

const memberInfo = [{
  id: 'banana',
  pw: '4321',
}]

const initState = {
  isLogin: false,
  message: '',
  memberId: '',
  memberPw: '',
}

const reducer = (prevState, action) => {
  switch (action.type) {
    case 'SET_ID':
      // return { ...initState, memberId: action.payload}
      return { ...prevState, memberId: action.payload}
    case 'SET_PW':
      return { ...prevState, memberPw: action.payload}
    case 'SET_LOGIN':
      return { ...prevState, isLogin: action.payload.isLogin, message: action.payload.msg}
    case 'RESET': 
      return initState
    default:
      return prevState
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initState);
 
  const loginHandler = () => {
    // console.log(state)
    let idCheck = state.memberId === memberInfo[0].id
    let pwCheck = state.memberPw === memberInfo[0].pw
    if(!idCheck) {
      return dispatch({type: 'SET_LOGIN', payload: {isLogin: false, msg: '아이디 오류'}})
    }
    
    if(!pwCheck) {
      return dispatch({type: 'SET_LOGIN', payload: {isLogin: false, msg: '암호 오류'}})
    }
    
    dispatch({type: 'SET_LOGIN', payload: {isLogin: true, msg: '로그인 성공'}})
  }
  
  const logoutHandler = () => {
    dispatch({type: 'RESET'})
  }


  return (
    <div className="App">
      <h1>Login Ex</h1>
      <h2>정답 아이디: {memberInfo[0].id} / 정답 비번: {memberInfo[0].pw}</h2>
        { !state.isLogin ? (
          <>
          <div>
            ID<input onChange={(e) => dispatch({type: 'SET_ID', payload: e.target.value})}/>
          </div>
          <div>
            PW<input onChange={(e) => dispatch({type: 'SET_PW', payload: e.target.value})}/>
          </div>
          <div>
            <button onClick={() => {loginHandler()}}>Login</button>
          </div>
          </>
        ) : (
          <div>
            <button onClick={() => {logoutHandler()}}>Logout</button>
          </div>  
        )
        }
        <div>
          {state.message && !state.isLogin ? <p>{state.message}</p> : <p></p>}
          {state.isLogin && <p>환영합니다.{state.memberId}님</p>}
        </div>
    </div>
  );
}

export default App;
