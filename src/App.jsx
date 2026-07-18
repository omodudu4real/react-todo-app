import { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { Tabs } from './components/Tabs';
import { TodoInput } from './components/TodoInput';
import { TodoList } from './components/TodoList';
import { getItem, setItem } from './utils/todoStorage';

function App() {
  const [activeTab, setActiveTab] = useState('Open');

  const [todos, setTodos] = useState(() => getItem('my-todos') || []);

  const handleAddTodo = newTodo => {
    const newTodoList = [
      ...todos,
      {
        id: crypto.randomUUID(),
        input: newTodo,
        complete: false
      }
    ];
    setTodos(newTodoList);
  };

  const handleEditTodo = todoId => {
    const newTodoList = todos.map(todo => {
      if (todo.id === todoId.id) {
        return { ...todo, complete: true };
      }
      return todo;
    });
    setTodos(newTodoList);
  };

  const handleDeleteTodo = todoId => {
    const newTodoList = todos.filter(todo => todo.id !== todoId.id);
    setTodos(newTodoList);
  };

  useEffect(() => {
    setItem('my-todos', todos);
  }, [todos]);

  return (
    <>
      <Header todos={todos} activeTab={activeTab} />
      <Tabs todos={todos} activeTab={activeTab} setActiveTab={setActiveTab} />
      <TodoInput handleAddTodo={handleAddTodo} activeTab={activeTab} />
      <TodoList
        todos={todos}
        activeTab={activeTab}
        handleEditTodo={handleEditTodo}
        handleDeleteTodo={handleDeleteTodo}
      />
    </>
  );
}

export default App;
