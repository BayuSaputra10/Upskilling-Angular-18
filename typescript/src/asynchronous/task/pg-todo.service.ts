import { Todo } from './todo.model'
import { TodoService } from './todo.service'

export class PgTodoService implements TodoService {
  private todos: Todo[] = []

  Create(todo: Todo): Promise<Todo> {
    return new Promise<Todo>((resolve, reject) => {
      setTimeout(() => {
        if (todo) {
          todo.id = this.todos.length + 1
          this.todos.push(todo)
          resolve(todo)
        } else {
          reject('Error: Todo is null or undefined')
        }
      }, 1000)
    })
  }

  List(): Promise<Todo[]> {
    return new Promise<Todo[]>((resolve, reject) => {
      setTimeout(() => {
        resolve(this.todos)
      }, 1000)
    })
  }

  Get(id: number): Promise<Todo> {
    return new Promise<Todo>((resolve, reject) => {
      setTimeout(() => {
        const todo = this.todos.find((t) => t.id === id)
        if (todo) {
          resolve(todo)
        } else {
          reject('Error: Todo not found')
        }
      }, 1000)
    })
  }
}
