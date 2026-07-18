import { TodoCard } from './TodoCard';

export function TodoList({
  todos,
  activeTab,
  handleEditTodo,
  handleDeleteTodo
}) {
  const tab = activeTab;
  const filteredTodoList =
    tab === 'All'
      ? todos
      : tab === 'Completed'
        ? todos.filter(todo => todo.complete)
        : todos.filter(todo => !todo.complete);
  return (
    <>
      {filteredTodoList.map(todo => (
        <TodoCard
          key={todo.id}
          todo={todo}
          handleDeleteTodo={handleDeleteTodo}
          handleEditTodo={handleEditTodo}
        />
      ))}
    </>
  );
}
