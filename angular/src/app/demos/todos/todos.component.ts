import { Component, OnInit } from '@angular/core'
import { TODO, Todo } from './model/todo'
import { TodoListComponent } from './todo-list/todo-list.component'
import { TodoFormComponent } from './todo-form/todo-form.component'

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [TodoListComponent, TodoFormComponent],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css',
})
export class TodosComponent implements OnInit {
  todos: Todo[] = []
  private _todo: Todo = { id: 0, name: '', isDone: false };

  get todo(): Todo { return this._todo }
  set todo(todo: Todo) { this.onSaveTodo(todo) }

  // Sebuah lifecycle di angular
  // Akan di jalankan ketikan component di load/panggil
  ngOnInit(): void {
    this.loadTodo()
  }

  loadTodo(): void {
    const sessionTodos: string = sessionStorage.getItem(TODO) as string
    if (!sessionTodos) {
      const todos: Todo[] = [
        {
          id: 1,
          name: 'Makan',
          isDone: true,
        },
        {
          id: 2,
          name: 'Minum',
          isDone: true,
        },
        {
          id: 3,
          name: 'Belajar Angular',
          isDone: false,
        },
      ]
      sessionStorage.setItem(TODO, JSON.stringify(todos))
      this.todos = todos
    } else {
      this.todos = JSON.parse(sessionTodos)
    }
  }

  onEditTodo(todo: Todo): void {
    console.log('onEditTodo:.todo:', todo)
    this._todo = { ...todo }
    console.log('onEditTodo:.this.todo:', this.todo)
  }

  onToggleTodo(todo: Todo): void {
    this.todos = this.todos.map((t) =>
      t.id === todo.id ? { ...t, isDone: !t.isDone } : t
    )
    sessionStorage.setItem(TODO, JSON.stringify(this.todos))
  }

  onSaveTodo(updatedTodo: Todo): void {
    if (updatedTodo.id === 0) {
      updatedTodo.id = this.todos.length + 1;
      this.todos.push(updatedTodo);
    } else {
      this.todos = this.todos.map(t =>
        t.id === updatedTodo.id ? updatedTodo : t
      );
    }
    sessionStorage.setItem('TODO', JSON.stringify(this.todos));
  }

  onDeleteTodo(todo: Todo): void {
    console.log('TodosComponent.onDeleteTodo.todo:', todo);
    this.todos = this.todos.filter((t) => t.id !== todo.id)
    sessionStorage.setItem(TODO, JSON.stringify(this.todos))
  }
}