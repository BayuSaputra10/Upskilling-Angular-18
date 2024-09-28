import { Todo } from './todo.model'

export interface TodoService {
  Create(todo: Todo): Promise<Todo>
  List(): Promise<Todo[]>
  Get(id: number): Promise<Todo>
}
