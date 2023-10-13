import './App.css';
import Todo from './components/Todo';
import AddTodo from './components/AddTodo';
import { useEffect, useState } from 'react';
import axios from 'axios';
function App() {
  console.log(process.env.REACT_APP_DB_HOST);
  const [todoItems, setTodoItems] = useState([]);

  useEffect(() => {
    const getTodos = async () => {
      const res = await axios.get(`${process.env.REACT_APP_DB_HOST}/todos`);
      console.log(res.data);
      setTodoItems(res.data);
    };
    getTodos();
  }, []);

  //todoItems 상태에 새로운 투두를 추가하는 일
  const addItem = async (newItem) => {
    // console.log(newItem); // {title : 저녁 먹기}
    // newItem id 키 값 넣고, newItem done 키값
    // newItem.id = todoItems.length + 1;
    // newItem.done = false;
    // todoItems 배열에 newItem을 추가
    // setTodoItems([...todoItems, newItem]);

    const res = await axios.post(
      `${process.env.REACT_APP_DB_HOST}/todo`,
      newItem
    );
    console.log(res);
    setTodoItems([...todoItems, res.data]);
  };

  //특정 todo를 삭제하는 일
  const deleteItem = async (id) => {
    // const result = todoItems.filter((events) => events.id !== id);
    // setTodoItems(result);

    await axios.delete(`${process.env.REACT_APP_DB_HOST}/todo/${id}`);
    const result = todoItems.filter((e) => e.id !== id);
    setTodoItems(result);
  };

  const updateItem = async (todoItem) => {
    const result = await axios.patch(
      `${process.env.REACT_APP_DB_HOST}/todo/${todoItem.id}`,
      todoItem
    );
    console.log(result.data);
  };

  return (
    <div className="App">
      <AddTodo addItem={addItem} />
      {/* todoItem 반복, props 데이터 (투두 객체)를 자식 컴포넌트에게 전달 */}
      {todoItems.map((item) => (
        <Todo
          key={item.id}
          item={item}
          deleteItem={deleteItem}
          updateItem={updateItem}
        />
      ))}
    </div>
  );
}

export default App;
