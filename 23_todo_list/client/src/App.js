import { useEffect, useState } from 'react';
import Todo from './components/Todo';
import AddTodo from './components/AddTodo';
import axios from 'axios';
import './style/App.css';

function App() {
  // console.log(process.env.REACT_APP_DB_HOST);
  const { REACT_APP_DB_HOST } = process.env;
  const [todoItems, setTodoItems] = useState([]);
  // const [deleted, setDeleted] = useState();

  useEffect(() => {
    const getTodos = async () => {
      await axios
        .get(`${REACT_APP_DB_HOST}/todos`)
        .then((result) => {
          console.log('@@@', result);
          // setTodoItems(result.data.reverse());
          setTodoItems(result.data);
        })
        .catch((err) => {
          console.error(err);
        });
    };

    getTodos();
  }, []);

  const addItem = async (newItem) => {
    // console.log(newItem);

    // newItem.done은 기본값으로 세팅
    // newItem.done = false;
    // newItem.id = todoItems.length + 1;
    // const { id, title, done } = newItem;

    // 투두 리스트에 새로운 투두를 추가
    // setTodoItems([...todoItems, newItem]);

    await axios
      .post(`${REACT_APP_DB_HOST}/todo`, newItem)
      .then((res) => {
        console.log('####', res);
        setTodoItems([...todoItems, res.data]);
      })
      .catch((err) => console.error(err));
  };

  // 투두 리스트에서 투두 삭제
  const deleteItem = async (item) => {
    // const newTodo = todoItems.filter((rowData) => rowData.id !== item.id);
    // setTodoItems(newTodo);
    console.log('item >>', item);
    await axios
      .delete(`${REACT_APP_DB_HOST}/todo/${item.id}`)
      .then((res) => {
        // console.log(res);
        // if (!res.data) {
        //   setDeleted(res.data);
        //   alert('삭제되지 않음');
        //   return;
        // }
        // if (res.data) {
        //   setDeleted(res.data);
        //   return;
        // }
        const newTodo = todoItems.filter((rowData) => rowData.id !== item.id);
        setTodoItems(newTodo);
      })
      .catch((err) => console.error(err));
  };

  const updateItem = async (targetItem) => {
    await axios.patch(`${REACT_APP_DB_HOST}/todo/${targetItem.id}`, targetItem);
  };

  return (
    <div className="App">
      <div className="box-decoration-clone bg-gradient-to-r from-indigo-600 to-pink-500 text-white px-2">Todo List</div>
      <AddTodo addItem={addItem} />
      {/* todoItems 반복, props로 데이터(투두 객체)를 자식 컴포넌트에게 전달 */}
      {todoItems.map((item) => {
        return <Todo key={item.id} item={item} deleteItem={deleteItem} updateItem={updateItem} />;
      })}
      <div>{todoItems.length}</div>
    </div>
  );
}

export default App;
