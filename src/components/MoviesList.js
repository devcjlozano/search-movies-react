import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Movie}  from './Movie'

export class MoviesList extends Component {
   static propTypes = {
     movies: PropTypes.array
   } 

   render () {
     const { movies } = this.props
     return (
       <div className="movies-list">
        {
          movies.map(movie => {
          return (
            <div 
              key={movie.imdbId}
              className="movies-list-item">
            <Movie 
               title={movie.Title}
               year={movie.Year}
               poster={movie.Poster}/>
            </div>
            )
          }) 
        }
       </div>
     )
 }
}