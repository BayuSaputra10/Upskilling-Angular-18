import { filter, map, Observable, of, tap } from 'rxjs'

const numbers$: Observable<number> = of(1, 2, 3, 4, 5)

// numbers$.subscribe((num) => console.log({ num }))

// const mapOperator$: Observable<number> = numbers$.pipe(map((num) => num * num))
// mapOperator$.subscribe((num) => console.log({ num }))

// Kita menggunakan sebuab map, filter

numbers$
  .pipe(
    map((num) => num * num),
    filter((num) => num > 2)
  )
  .subscribe((num) => console.log({ num }))
