export function Header({ todos, activeTab }) {
  const numOfTasks =
    activeTab === 'All'
      ? todos.length
      : activeTab === 'Open'
        ? todos.filter(todo => !todo.complete).length
        : todos.filter(todo => todo.complete).length;

  const taskLabel = numOfTasks === 1 ? 'task' : 'tasks';

  const prefixLabel = numOfTasks === 0 ? `No ${activeTab}` : activeTab;

  const displayNumOfTasks = numOfTasks === 0 ? '' : `: ${numOfTasks}`;

  const prefixLabelForAll =
    numOfTasks === 0 ? `Time to add a task ✍️` : `${activeTab} ${taskLabel}`;

  if (activeTab === 'All') {
    return (
      <header>
        <h1 className="text-gradient">
          {prefixLabelForAll}
          {displayNumOfTasks}
        </h1>
      </header>
    );
  }

  return (
    <header>
      <h1 className="text-gradient">
        {prefixLabel} {taskLabel}
        {displayNumOfTasks}
      </h1>
    </header>
  );
}
