import { useState } from 'react';
import FilterButton from './FilterButton';
import TodoList from './TodoList';

export default function App() {
  const [visibility, setVisibility] = useState('all');
  const filterName = ['all', 'active', 'completed'];

  return (
    <div className="container">
      <div className="todo-container">
        <div className="todo__filter-container">
          {filterName.map(name =>
            <FilterButton
              key={name}
              label={name.toLowerCase()}
              isPressed={name === visibility}
              setVisibility={setVisibility}
            />
          )}
        </div>
        <TodoList visibility={visibility} />
      </div>
    </div>
  );
}