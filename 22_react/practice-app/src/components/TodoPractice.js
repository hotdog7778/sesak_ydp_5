import React, {useState} from 'react'

export default function TodoPractice() {
  const [inputTodo, setInputTodo] = useState('')
  
  const [todoList, setTodoList] = useState([])

  const saveInputTodo = (e) => {
    setInputTodo(e.target.value)
  }
  
  const saveTodoList = () => {
    const beforeTodoList = todoList
    setTodoList(beforeTodoList.concat([
        {
          id: todoList.length + 1,
          content: inputTodo,
          checked: false,
        }
      ])
    )
  }

  const checked = (e, id) => {
    const newTodo = todoList.map((arr) => ({
      ...arr,
      checked: arr.id === id ? e.target.checked : arr.checked
    }))
    setTodoList(newTodo)
  }
//   const handleChecked = (id) => {
//     const newTodos = todos.map((todo) => ({
//       ...todo,
//       checked: id === todo.id ? !todo.checked : todo.checked,
//     }));
//     setTodos(newTodos);
//   };


  const deleteTodo = () => {
    const newTodo = todoList.filter((arr) => arr.checked === false)
    
    setTodoList(newTodo)
}

  return (
    <div>
      <h1>TodoPractice</h1>
        <div>
          <input placeholder='할 일 입력..' onChange={saveInputTodo}/><button onClick={saveTodoList}>추가</button>
        </div>
        
        <div>
          {
            todoList.map((val) => {
              return <li key={val.id}><input type='checkbox' name='todo' onChange={(e) => checked(e, val.id)}/>{val.content}</li>
            })
          }
        </div>  
        
        <div>
          <button onClick={() => deleteTodo()}>완료된 할 일 삭제</button>
        </div>
    </div>
  )
}
