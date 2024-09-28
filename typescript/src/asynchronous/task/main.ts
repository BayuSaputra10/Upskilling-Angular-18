import { Todo } from './todo.model'
import { PgTodoService } from './pg-todo.service'

async function main() {
  const todoService = new PgTodoService()

  try {
    const todosToCreate: Todo[] = [
      { task: 'Belajar TypeScript', isCompleted: true },
      { task: 'Makan', isCompleted: true },
      { task: 'Tidur', isCompleted: false },
    ]

    const createdTodos = await Promise.all(
      todosToCreate.map((todo) => todoService.Create(todo))
    )
    console.log({ createdTodos })

    const todos = await todoService.List()
    console.log({ todos })

    const fetchedTodo = await todoService.Get(todosToCreate[0].id!)
    console.log({ fetchedTodo })
  } catch (err) {
    console.error('Error:', err)
  }
}

main().catch((err) => console.error(err))
