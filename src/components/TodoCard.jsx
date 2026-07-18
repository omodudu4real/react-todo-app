export function TodoCard({ todo, handleEditTodo, handleDeleteTodo }) {
  const actionButtons = [
    {
      id: crypto.randomUUID(),
      label: 'Done',
      action: () => {
        handleEditTodo(todo);
      },
      doneButton: todo.complete
    },
    {
      id: crypto.randomUUID(),
      label: 'Delete',
      action: () => {
        handleDeleteTodo(todo);
      }
    }
  ];
  return (
    <div className="card todo-item">
      <p style={{ overflow: 'auto', textAlign: 'justify' }}>{todo.input}</p>
      <div className="todo-buttons">
        {actionButtons.map(actionButton => {
          return (
            <button
              key={actionButton.id}
              disabled={actionButton.doneButton}
              onClick={actionButton.action}
              type="button">
              <h6>{actionButton.label}</h6>
            </button>
          );
        })}
      </div>
    </div>
  );
}
