/**
 * Async-Await -> tidak akan ada tanpa promise
 */

import {
  getMovieDetailPromise,
  getMovieListPromise,
  getMovieReviewPromise,
} from './promise'

async function fethcMovie(): Promise<void> {
  try {
    console.log('Start')
    const movies = await getMovieListPromise()
    console.log({ movies })

    const detail = await getMovieDetailPromise(movies[0])
    console.log({ detail })

    const reviews = await getMovieReviewPromise(detail)
    console.log({ reviews })
  } catch (error) {
    console.log('Error fetch movie')
  }
}

fethcMovie()
