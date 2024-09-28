// Todo With Observable

import { combineLatest, map, Observable, Observer, of, Subject } from 'rxjs'

interface Todo {
  id?: number
  task: string
  isCompleted: boolean
}

interface TodoService {
  Create(todo: Todo): Observable<Todo>
  List(): Observable<Todo[]>
  Get(id: number): Observable<Todo>
}

class PgTodoService implements TodoService {
  private todos: Todo[] = []
  // Cara 1
  // private todoNotification: Subject<boolean> = new Subject<boolean>()
  // Cara 2
  private todoNotification: Subject<Todo[]> = new Subject<Todo[]>()


  Create(todo: Todo): Observable<Todo> {
    return new Observable<Todo>((observer: Observer<Todo>) => {
      setTimeout(() => {
        todo.id = this.todos.length + 1
        this.todos.push(todo)
        // Cara 1
        // this.todoNotification.next(true)
        // Cara 2
        this.todoNotification.next(this.todos)
        observer.next(todo)
      }, 1000)
    })
  }

  List(): Observable<Todo[]> {
    // Cara 1
    // return of(this.todos)
    // Cara 2
    return this.todoNotification.asObservable()
  }

  Get(id: number): Observable<Todo> {
    throw new Error('Method not implemented.')
  }
}

const todoService: PgTodoService = new PgTodoService()

combineLatest([
  todoService.Create({ task: 'Makan', isCompleted: true }),
  todoService.Create({ task: 'Minum', isCompleted: true }),
  todoService.Create({ task: 'Tidur', isCompleted: false }),
  todoService.Create({ task: 'Rebahan', isCompleted: true }),
]).subscribe((todos: Todo[]) => console.log(`${todos.length} berhasil terbuat`))

// Cara 1
// todoService.notification().subscribe((isUpdated: boolean) => {
//   if (isUpdated) {
//     todoService
//       .List()
//       .pipe(
//         map((todos: Todo[]) => {
//           return todos.map((todo: Todo) => {
//             return `Todo ${todo.task} ${todo.isCompleted ? 'Sudah Selesai' : 'Belum Selesai'}`
//           })
//         })
//       )
//       .subscribe((todos) => {
//         console.log({ todos });
//       })
//   }
// })

// Cara 2
todoService.List().subscribe((todos: Todo[]) => console.log({ todos }))