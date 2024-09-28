import { Observable, Observer } from 'rxjs'
import { Task } from './task'
import { TaskService } from './task.service'

export class PgTaskService implements TaskService {
  private tasks: Task[] = []

  Create(task: Task): Observable<Task> {
    return new Observable<Task>((observer: Observer<Task>) => {
      setTimeout(() => {
        if (task) {
          task.id = this.tasks.length + 1
          this.tasks.push(task)
          observer.next(task)
        } else {
          observer.error('Error: task is null or undefined')
        }
      }, 1000)
    })
  }

  List(): Observable<Task[]> {
    return new Observable<Task[]>((observer: Observer<Task[]>) => {
      setTimeout(() => {
        observer.next(this.tasks)
      }, 1000)
    })
  }
  Get(id: number): Observable<Task> {
    return new Observable<Task>((observer: Observer<Task>) => {
      setTimeout(() => {
        const task = this.tasks.find((t) => t.id === id)
        if (task) {
          observer.next(task)
        } else {
          observer.error('Error: task not found')
        }
      }, 1000)
    })
  }
}
