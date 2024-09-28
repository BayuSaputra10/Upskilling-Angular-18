import { Observable, Subscription } from 'rxjs'

class PromiseAndObservable {
  protected myPromise: Promise<unknown> = new Promise<unknown>(() => {})
  protected myObservable: Observable<unknown> = new Observable<any>()
  protected mySubscribe: Subscription = new Subscription()

  create() {
    this.myPromise = new Promise<string>((resolve) => {
      console.log('Promise has created!')
      setInterval(() => {
        resolve('Promise has emitted')
      }, 1000)
    })

    this.myObservable = new Observable<string>((observer) => {
      console.log('Observer has created!')
      setInterval(() => {
        observer.next('Observer has emitted')
      }, 1000)
    })
  }

  execute() {
    this.myPromise.then((data) => {
      console.log({ data })
    })

    // this.myObservable.subscribe((data) => {
    //   console.log({ data })
    // })

    this.mySubscribe = this.myObservable.subscribe((data) =>
      console.log({ data })
    )
  }

  canceled() {
    this.mySubscribe.unsubscribe()
  }
}

const promiseAndObservable = new PromiseAndObservable()
promiseAndObservable.create()
promiseAndObservable.execute()
setTimeout(() => {
  promiseAndObservable.canceled()
}, 10000)

// setTimeout
// setInterval => gunanya untuk memanggil suatu fungsi tiap beberapa milidetik

// function count(): void {
//   setInterval(() => {
//     console.log('PING!');
//   }, 1000)
// }

// count()
