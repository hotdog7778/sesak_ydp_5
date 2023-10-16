import React, { useState } from 'react';

export default function AddTodo({ addItem }) {
  const [todoItem, setTodoItem] = useState({
    title: '',
  });

  const onButtonClick = () => {
    addItem(todoItem);

    // input 초기화
    setTodoItem({ title: '' });
  };

  return (
    <div className="AddTodo">
      <input type="text" placeholder="add your new todo" value={todoItem.title} className="box-border" onChange={(e) => setTodoItem({ title: e.target.value })}></input>
      <button onClick={onButtonClick}>ADD</button>
    </div>
  );
}
