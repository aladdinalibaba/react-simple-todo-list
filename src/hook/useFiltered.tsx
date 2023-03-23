import { Todo } from '../types/dto';

export function useFiltered(todoList: Todo[], visibility: string) {
  const FILTER_MAP: any = {
    all: () => true,
    active: (todo: Todo) => !todo.isCompleted,
    completed: (todo: Todo) => todo.isCompleted
  }
  
  return todoList.filter(FILTER_MAP[visibility]);
}