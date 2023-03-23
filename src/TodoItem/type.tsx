import { Todo } from '../types/dto';

export type TodoItemProps = {
  todo: Todo;
  onChange: () => void;
  deleteTodo: () => void;
}