import { Subject } from 'rxjs'

function observerA(v: number): void {
  console.log(`observerA: ${v}`)
}

function observerB(v: number): void {
  console.log(`observerB: ${v}`)
}

observerA(1)
observerB(1)
observerA(2)
observerB(2)
observerA(3)
observerB(3)

const subject = new Subject<number>()

subject.subscribe({
  next: (v) => console.log(`observerA: ${v}`),
})

subject.subscribe({
  next: (v) => console.log(`observerB: ${v}`),
})

subject.next(1)
subject.next(2)
