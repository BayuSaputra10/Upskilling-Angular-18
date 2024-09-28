import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Todo } from '../model/todo';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-form',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css'],
})
export class TodoFormComponent implements OnChanges {
  @Input() todo: Todo = {
    id: 0,
    name: '',
    isDone: false,
  };
  @Output() todoChange = new EventEmitter<Todo>();

  todoForm: FormGroup = new FormGroup({
    id: new FormControl(0),
    name: new FormControl(''),
    isDone: new FormControl(false)
  });

  get todoValue(): Todo {
    return this.todoForm.value;
  }

  set todoValue(value: Todo) {
    this.todoForm.setValue({
      id: value.id,
      name: value.name,
      isDone: value.isDone
    }, { emitEvent: false });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['todo'] && changes['todo'].currentValue) {
      this.todoValue = this.todo;
    }
  }

  onSubmit(): void {
    this.todoChange.emit(this.todoValue);
    this.todoForm.reset({
      id: 0,
      name: '',
      isDone: false
    });
  }
}
