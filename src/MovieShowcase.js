import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    // map over your movieData array and return the correct 
     return movieData.map(movie => { // .map  returns array of  movie cards
       return (//returns movie card
         <MovieCard 
                  title = {movie.title}
                  rating = {movie.IMDBRating}
                  genres = {movie.genres}
                  poster = {movie.poster}
       />)
    })
  }

  render() {
    // console.log("here")
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}
