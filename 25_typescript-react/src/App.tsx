// import React from 'react';
import Card from './components/Card';
import Student from './components/Student';
import TodoList from './components/TodoList';

function App() {
  const handleClick = (name: string, grade: number): void => {
    console.log(`안녕 난 ${name}이고, ${grade}학년이야!`);
  };

  return (
    <div className="App">
      <h1>타입 스크립트 & 리액트</h1>
      <Student name="새싹" grade={3} handleClick={handleClick} />
      <br />
      <Student name="새싹" grade={3} part="CS" handleClick={handleClick} />
      <br />
      <hr />
      <Card title="오늘 배울 것은?">
        <h1>타입 스크립트 & 리액트</h1>
      </Card>
      <TodoList></TodoList>
    </div>
  );
}

export default App;
