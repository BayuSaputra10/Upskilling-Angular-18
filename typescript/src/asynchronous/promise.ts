/**
 * Promise -> ini adalah penerapan konsep async yang ke2
 * Promise juga sebuah function, ciri khas dari promise itu terdiri dari 2 keyword
 * (resolve) dan (reject)
 */

// function getMovieListPromise() {
//   return new Promise<string[]>((resolve, reject) => {
//     console.log('Mendapatkan data dari API')
//     setTimeout(() => {
//       const movies = ['Laskar Pelangi', 'KKN Desa Penari', 'Ipar Adalah Maut']
//       resolve(movies)
//     }, 1000)
//   })
// }

// function getMovieListPromise() {
//   return new Promise<string[]>((resolve, reject) => {
//     console.log('Mendapatkan data dari API')
//     setTimeout(() => {
//       try {
//         const movies = ['Laskar Pelangi', 'KKN Desa Penari', 'Ipar Adalah Maut']
//         resolve(movies)
//       } catch (error) {
//         reject('Error mendapatkan data dari API')
//       }
//     }, 1000)
//   })
// }

// // Cara memanggil promise
// getMovieListPromise().then((movies) => {
//   console.log({ movies });
// })

export function getMovieListPromise(): Promise<string[]> {
  return new Promise<string[]>((resolve, reject) => {
    try {
      console.log('Mendapatkan data dari API')
      setTimeout(() => {
        const movies = ['Laskar Pelangi', 'KKN Desa Penari', 'Ipar Adalah Maut']
        resolve(movies)
      }, 1000)
    } catch (error) {
      reject('Error mendapatkan film')
    }
  })
}

export function getMovieDetailPromise(movie: any): Promise<any> {
  return new Promise<any>((resolve, reject) => {
    try {
      console.log(`Mendapatkan detail movie dari ${movie}`)
      setTimeout(() => {
        const details = { movie, year: 2024, genre: 'Drama' }
        resolve(details)
      }, 1000)
    } catch (error) {
      reject('Error mendapatkan detail film')
    }
  })
}

export function getMovieReviewPromise(detail: any): Promise<string[]> {
  return new Promise<string[]>((resolve, reject) => {
    try {
      console.log(`Mendapatkan review dari detail movie ${detail.movie}`)
      setTimeout(() => {
        const reviews = [
          'Filmnny bagus sekali',
          'Buat Part 2 dong',
          'Semoga hanya di film...',
        ]
        resolve(reviews)
      })
    } catch (error) {
      reject('Error mendapatkan review film')
    }
  })
}

// console.log('Start');
// getMovieListPromise().then((movies) => {
//   console.log({ movies });
//   return getMovieDetailPromise(movies[0])
// }).then((detail) => {
//   console.log({ detail });
//   return getMovieReviewPromise(detail)
// }).then((reviews) => {
//   console.log({ reviews });
//   console.log('Finish');
// })
