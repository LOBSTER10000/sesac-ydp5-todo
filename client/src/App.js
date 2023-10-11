import './App.css';
import Todo from './components/Todo';
import AddTodo from './components/AddTodo';
import { useState } from 'react';

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
      title: '백엔드 프로젝트 완성하기',
      done: false,
    },
  ]);

  //todoItems 상태에 새로운 투두를 추가하는 일
  const addItem = (newItem) => {
    console.log(newItem); // {title : 저녁 먹기}
    // newItem id 키 값 넣고, newItem done 키값
    newItem.id = todoItems.length + 1;
    newItem.done = false;
    // todoItems 배열에 newItem을 추가
    setTodoItems([...todoItems, newItem]);
  };

  //특정 todo를 삭제하는 일
  const deleteItem = (id) => {
    const result = todoItems.filter((events) => events.id !== id);
    setTodoItems(result);
  };

  return (
    <div className="App">
      <AddTodo addItem={addItem} />
      {/* todoItem 반복, props 데이터 (투두 객체)를 자식 컴포넌트에게 전달 */}
      {todoItems.map((item) => (
        <Todo key={item.id} item={item} deleteItem={deleteItem} />
      ))}
    </div>
  );
}

export default App;
