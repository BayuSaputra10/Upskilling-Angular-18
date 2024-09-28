// Penerapan Callback itu biasanya ditaruh di sebuah parameter di function
// Penamaan Callback bebas, tapi biasanya di singkat cb, atau callback

function getMovieList(cb: any) {
  console.log('Mendapatkan data dari API')
  setTimeout(() => {
    const movies = ['Laskar Pelangi', 'KKN Desa Penari', 'Ipar Adalah Maut']
    cb(movies)
  }, 1000)
}

function getMovieDetail(movie: any, cb: any) {
  console.log(`Mendapatkan detail movie dari ${movie}`)
  setTimeout(() => {
    const details = { movie, year: 2024, genre: 'Drama' }
    cb(details)
  }, 1000)
}

function getMovieReview(detail: any, cb: any) {
  console.log(`Mendapatkan review dari detail movie ${detail.movie}`)
  setTimeout(() => {
    const reviews = [
      'Filmnny bagus sekali',
      'Buat Part 2 dong',
      'Semoga hanya di film...',
    ]
    cb(reviews)
  }, 1000)
}

// callback hell
console.log('Start')
getMovieList((movie: any) => {
  console.log({ movie })
  getMovieDetail(movie[0], (detail: any) => {
    console.log({ detail })
    getMovieReview(detail, (review: any) => {
      console.log({ review })
    })
  })
})
console.log('Finish')
