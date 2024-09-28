import { Component } from '@angular/core'
import { PortofolioHomeComponent } from './pages/portofolio-home/portofolio-home.component'
import { NgFor, NgIf } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { ParentComponent } from './demos/sharing-data/parent/parent.component'
import { TodosComponent } from "./demos/todos/todos.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PortofolioHomeComponent, NgIf, NgFor, FormsModule, ParentComponent, TodosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title: string = 'Upskilling Angular'

  people: string[] = ['Andrew', 'Maria', 'Jesicca', 'John Doe']

  getPeople(): string {
    let result: string = ''
    for (const person of this.people) {
      result += person
    }
    return result
  }

  bootcampTrainees = [
    {
      name: 'Andrew',
      address: 'Bogor',
    },
    {
      name: 'Maria',
      address: 'Bandung',
    },
    {
      name: 'John Doe',
      address: 'Jakarta Barat',
    },
  ]

  count: number = 1

  image = {
    src: 'images/agency.png',
    alt: 'Agency',
  }

  onClick(): void {
    alert('Tombol telah diklik')
  }

  isClicked: boolean = false

  toogleText(): void {
    this.isClicked = !this.isClicked
  }

  fullName: string = ''
  onInputName($event: any): void {
    console.log($event.target.value)
    const { value } = $event.target
    this.fullName = value
  }
}
