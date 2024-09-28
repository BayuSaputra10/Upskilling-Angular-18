import { combineLatest } from 'rxjs'
import { Task } from './task'
import { TaskService } from './task.service'
import { PgTaskService } from './pg-task.service'

const taskService: TaskService = new PgTaskService()
combineLatest([
  taskService.Create({ task: 'Madang', isCompleted: false }),
  taskService.Create({ task: 'Minum', isCompleted: true }),
  taskService.Create({ task: 'Turu', isCompleted: false }),
  taskService.Create({ task: 'Ngoding', isCompleted: false }),
]).subscribe((tasks: Task[]) => {
  console.log(`${tasks.length} kegiatan sudah ditambahkan`)
})

taskService.List().subscribe((tasks) => console.log({ tasks }))
