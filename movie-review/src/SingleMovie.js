import React from 'react'
import { Link, useParams } from 'react-router-dom'
import useFetch from './useFetch';

const SingleMovie = () => {
  const {id} = useParams();
  const {movie, isLoading, isError} = useFetch(`&i=${id}`);
  // console.log(movie)
  if(isLoading){
    return(
      <section className="movie-section ">
        <div className="loading">Loading....</div>;
      </section>
    )
  }
  return (
    <section className="movie-section">
    <div className="movie-card">
      <figure>
        <img src={movie.Poster} alt="" />
      </figure>
      <div className="card-content">
        <p className="title">{movie.Title}</p>
        <p className=""></p>
        <p className="card-text"><strong>Released Date: </strong>{movie.Released}</p>
        <p className="card-text"><strong>Genre: </strong>{movie.Genre}</p>
        <p className="card-text"><strong>IMDB Rating: </strong>{movie.imdbRating} / 10</p>
        <p className="card-text"><strong>Country: </strong>{movie.Country}</p>
        <p className="card-text"><strong>Runtime: </strong>{movie.Runtime}</p>
        <p className="card-text"><strong>BoxOffice: </strong>{movie.BoxOffice}</p>
        <p className="card-text"><strong>Language: </strong>{movie.Language}</p>
        <p className="card-text"><strong>Director: </strong>{movie.Director}</p>
        <p className="card-text"><strong>Actors: </strong>{movie.Actors}</p>
        <p className="card-text"><strong>Movie Plot: </strong>{movie.Plot}</p>
        <Link to="/" className="back-btn">
          Go Back
        </Link>
      </div>
    </div>
  </section>
  )
}

export default SingleMovie