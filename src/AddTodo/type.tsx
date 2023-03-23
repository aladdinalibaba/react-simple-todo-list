import { Todo } from '../types/dto';

export type AddTodoProps = {
  setTodoList: React.Dispatch<React.SetStateAction<Todo[]>>;
}