export function Tabs({ todos, activeTab, setActiveTab }) {
  const tabList = [
    { id: crypto.randomUUID(), tab: 'All' },
    { id: crypto.randomUUID(), tab: 'Open' },
    { id: crypto.randomUUID(), tab: 'Completed' }
  ];
  return (
    <nav className="tab-container">
      {tabList.map(list => {
        const numOfTasks =
          list.tab === 'All'
            ? todos.length
            : list.tab === 'Open'
              ? todos.filter(todo => !todo.complete).length
              : todos.filter(todo => todo.complete).length;

        return (
          <button
            className={`tab-button  ${list.tab === activeTab ? 'tab-selected' : ''}`}
            onClick={() => {
              setActiveTab(list.tab);
            }}
            type="button"
            key={list.id}>
            <h4>
              {list.tab} <span>({numOfTasks})</span>
            </h4>
          </button>
        );
      })}
      <hr style={{ borderRadius: '10px' }} />
    </nav>
  );
}
