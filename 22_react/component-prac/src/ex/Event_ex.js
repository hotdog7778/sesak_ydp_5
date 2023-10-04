import React, {useState} from 'react'

export default function Event_ex() {
  const [state, setState] = useState([
    {
        idx: 1,
        name: '코디' ,
        email: 'codi@gmail.com' ,
    },
    {
        idx: 2,
        name: '윤소희' ,
        email: 'yoonsohee@gmail.com' ,
    },
  ])
  const [inputName, setInputName] = useState('')
  const [inputEmail, setInputEmail] = useState('')

  function addUser() {
    if(!inputName || !inputEmail) {
        return;
    }

    const newState = state.concat([{
        idx: state.length + 1,
        name: inputName.name,
        email: inputEmail.email,
    }])

    console.log(newState)
    setState(newState)
    setInputName('')
    setInputEmail('')
  }

  return (
    <div>
        <input name='userName' placeholder='이름' 
            onChange={(e) => {
                setInputName({
                    name: e.target.value,
                })
            }}
        />
        
        <input name='userEmail' placeholder='이메일' 
            onChange={(e) => {
                setInputEmail({
                    email: e.target.value,
                })
            }}
        />

        <button onClick={(e) => {
                addUser()
            }}>등록
        </button>

        {
            state.map((value) => {
                return <p key={value.idx}>{value.name}: {value.email}</p> 
            })
        }

    </div>
  )
}