import { Component } from '@angular/core'
import { ChildComponent } from '../child/child.component'

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css',
})
export class ParentComponent {
  titleParent: string = 'Title from parent.component'
  counter: number = 0

  // Tidak lagi digunakan jika sudah menerapkan two-way-binding
  // onCounterChanged(count: number): void {
  //   this.counter = count
  // }
}
