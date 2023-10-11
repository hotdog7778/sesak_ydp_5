import React from 'react';

export default function Todo({ item, deleteItem }) {
  const { id, title, done } = item;

  const onDeleteBtnClick = () => {
    deleteItem(id);
  };

  return (
    <div>
      <input type="checkbox" name={`todo${id}`} id={`todo${id}`} defaultChecked={done}></input>
      <label htmlFor={`todo${id}`}>{title}</label>
      <button onClick={onDeleteBtnClick}>삭제</button>
    </div>
  );
}
