import { useState } from 'react';
import Todo from './components/Todo';
import AddTodo from './components/AddTodo';

function App() {
  const [todoItems, setTodoItems] = useState([
    {
      id: 1,
      title: 'my todo1',
      done: false,
    },
    {
      id: 2,
      title: 'my todo2',
      done: false,
    },
    {
      id: 3,
      title: 'my todo3',
      done: true,
    },
    {
      id: 4,
      title: '밥먹기',
      done: false,
    },
  ]);

  const addItem = (newItem) => {
    // console.log(newItem);

    // newItem.done은 기본값으로 세팅
    newItem.done = false;
    newItem.id = todoItems.length + 1;
    const { id, title, done } = newItem;

    // 투두 리스트에 새로운 투두를 추가
    setTodoItems([
      ...todoItems,
      {
        id,
        title,
        done,
      },
    ]);
  };

  return (
    <div className="App">
      <AddTodo addItem={addItem} />

      {/* todoItems 반복, props로 데이터(투두 객체)를 자식 컴포넌트에게 전달 */}
      {todoItems.map((item) => {
        return <Todo key={item.id} item={item} />;
      })}
    </div>
  );
}

export default App;
