import React from 'react'
import { Link } from 'react-router-dom';
import { useGlobalContext } from './context'

const Movies = () => {
  const {movie, isLoading, isError} = useGlobalContext();
  if(isLoading){
    return <div className="loading">Loading....</div>;
  }
  return (
    <section className='container movie-page'>
      <div className="grid grid-4-col">
        {!isLoading && movie.map((currMovie) =>{
          const {Title, imdbID, Poster} = currMovie;
          const movieName = Title.substring(0, 15)+"...";
          return(
            <div>
              <Link to={`movie/${imdbID}`} key = {imdbID}>
                <div className="card">
                  <div className="card-info">
                    <h2>{Title.length>15 ? movieName : Title}</h2>
                    <img src={Poster} alt="" />
                  </div>
                </div>
              </Link>
            </div>
          )
          
          })}
      </div>
    </section>
  )
}

export default Movies