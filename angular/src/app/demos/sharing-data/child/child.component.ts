import { Component, EventEmitter, Input, Output } from '@angular/core'

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
})
export class ChildComponent {
  // Menerima sebuah data dari parent
  // Directive @Input
  @Input() titleChild: string = 'Child Component'
  @Input() counter: number = 0
  @Output() counterChange = new EventEmitter<number>()

  increment(): void {
    this.counter++
    this.counterChange.emit(this.counter)
  }
}
