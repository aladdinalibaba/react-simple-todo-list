import { useState } from 'react';
import AddTodo from '../AddTodo';
import { useFiltered } from '../hook/useFiltered';
import TodoItem from '../TodoItem';
import { Todo } from '../types/dto';
import { TodoListProps } from './type';

export default function TodoList({ visibility }: TodoListProps) {
  const [todoList, setTodoList] = useState<Todo[]>([]);
  const filtered = useFiltered(todoList, visibility);

  const updateTodo = (id: number) => {
    setTodoList(prev => prev.map(todo => {
      return todo.id === id
        ? {
            id,
            text: todo.text,
            isCompleted: !todo.isCompleted
          }
        : todo;
    }));
  }

  const deleteTodo = (id: number) => {
    setTodoList(prev => prev.filter(todo => todo.id !== id));
  }

  return (
    <>
      <AddTodo setTodoList={setTodoList} />
      <ul className="todo__list">
        <h3>Todo {`${visibility} ${filtered.length}`}</h3>
        {filtered.map(todo =>
          <TodoItem
            key={todo.id}
            todo={todo}
            onChange={() => updateTodo(todo.id)}
            deleteTodo={() => deleteTodo(todo.id)}
          />
        )}
      </ul>
    </>
  );
}