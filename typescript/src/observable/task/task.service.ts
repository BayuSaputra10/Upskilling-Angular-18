import { Observable } from 'rxjs'
import { Task } from './task'

export interface TaskService {
  Create(task: Task): Observable<Task>
  List(): Observable<Task[]>
  Get(id: number): Observable<Task>
}
