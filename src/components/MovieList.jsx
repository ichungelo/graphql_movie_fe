import { gql, useQuery } from '@apollo/client'
import React from 'react'

import Movie from './Movie'

const MOVIES = gql`
query {
  movies {
    id
    title
    year
    poster
    overview
  }
}
`

const MovieList = () => {
  const { data, error } = useQuery(MOVIES)
  console.log(error)
  
  return (
    <div className='flex flex-wrap justify-center pt-nav'>
      {data?.movies.map((movie, index) => (
        <div className='basis-1/3' key={index}>
          <Movie key={movie.id} movie={movie} />
        </div>
      ))
      }
    </div>
  )
}

export default MovieList