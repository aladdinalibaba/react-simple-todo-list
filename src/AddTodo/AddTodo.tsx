import React, { useState } from 'react';
import { AddTodoProps } from './type';

export default function AddTodo({ setTodoList }: AddTodoProps) {
  const [todoInput, setTodoInput] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTodoInput(event.target.value);
  }

  const handleClick = () => {
    setTodoList(prev => [{
      id: Date.now(),
      text: todoInput,
      isCompleted: false
    }, ...prev]);
    
    setTodoInput('');
  }

  return (
    <div className="add-todo">
      <input
        type="text"
        placeholder="Add todo"
        value={todoInput}
        onChange={handleChange}
      />
      <button
        className="addTodo-button"
        onClick={handleClick}
        type="button"
        disabled={!todoInput}>Add</button>
    </div>
  );
}