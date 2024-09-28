import { Component, EventEmitter, Input, Output } from '@angular/core'
import { Todo } from '../model/todo'

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css',
})
export class TodoListComponent {
  @Input() todos: Todo[] = []
  @Output() editTodo = new EventEmitter<Todo>()
  @Output() toggleTodo = new EventEmitter<Todo>()
  @Output() deleteTodo = new EventEmitter<Todo>()

  onEditTodo(todo: Todo): void {
    console.log('TodoListComponent.onEditTodo.todo:', todo)
    this.editTodo.emit(todo)
  }

  onToggleTodo(todo: Todo): void {
    this.toggleTodo.emit(todo)
  }

  onDeleteTodo(todo: Todo): void {
    console.log('TodoListComponent.onDeleteTodo.todo:', todo);

    this.deleteTodo.emit(todo)
  }
}