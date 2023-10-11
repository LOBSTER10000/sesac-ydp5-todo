import './App.css';
import Todo from './components/Todo';
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
  ]);

  return (
    <div className="App">
      {/* todoItem 반복, props 데이터 (투두 객체)를 자식 컴포넌트에게 전달 */}
      <Todo />
      <Todo />
    </div>
  );
}

export default App;
