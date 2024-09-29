/* eslint-disable react/prop-types */
import {Link} from 'react-router-dom'

import {FaStar} from 'react-icons/fa'

const moviesImg = import.meta.env.VITE_IMG

const MovieCard = ({movie, showLink = true}) => {
  return (
    <div className='movie-card'>
      <img src={moviesImg + movie.poster_path} alt={movie.title} />
      <h2>{movie.title}</h2>
      <p>
        <FaStar /> {movie.vote_average}
      </p>
          {showLink && <Link to={`/movie/${movie.id}`}>Details</Link>}
    </div>
  )
}

export default MovieCard;
