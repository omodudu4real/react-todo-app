import { useState } from 'react';

export function TodoInput({ handleAddTodo, activeTab }) {
  const [inputValue, setInputValue] = useState('');
  return (
    <div className="input-container">
      <input
        style={{ display: activeTab === 'Completed' ? 'none' : 'block' }}
        type="text"
        placeholder="Add Task"
        value={inputValue}
        onChange={e => {
          setInputValue(e.target.value);
        }}
      />
      <button
        type="button"
        style={{
          display: activeTab === 'Completed' ? 'none' : 'flex',
          paddingBlock: '7px',
          marginRight: '5px'
        }}
        onClick={() => {
          const spaceGuard = /^\s+$/g;
          const symbolStartGuard = /^\W+/g;
          const guard =
            !inputValue ||
            inputValue.length <= 3 ||
            spaceGuard.test(inputValue) ||
            symbolStartGuard.test(inputValue);
          if (guard) {
            return;
          }
          handleAddTodo(inputValue);
          setInputValue('');
        }}>
        <svg viewBox="0 0 448 512" width="30px" height="30px">
          <title>Add item</title>
          <path
            fill="#ffffff"
            d="M256 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 160-160 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l160 0 0 160c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160 160 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-160 0 0-160z"
          />
        </svg>
      </button>
    </div>
  );
}
