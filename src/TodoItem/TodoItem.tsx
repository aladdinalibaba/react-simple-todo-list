import { useId } from 'react';
import { TodoItemProps } from './type';

export default function TodoItem({
  todo: { text, isCompleted },
  onChange,
  deleteTodo
}: TodoItemProps) {
  const checkboxId = useId();

  return (
    <li className="todo__item">  
      <div className="todo__content">
        <input
          id={checkboxId}
          className="todo__toggle-input"
          type="checkbox"
          onChange={onChange}
          defaultChecked={isCompleted}
        />
        <label className="todo__toggle-label" htmlFor={checkboxId}>
          {text}
        </label>
      </div>
      <button className="todo__delete-button" onClick={deleteTodo}>Delete</button>
    </li>
  );
}