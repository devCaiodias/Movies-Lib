import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {BsGraphUp, BsWallet2, BsHourglassSplit, BsFillFileEarmarkTextFill} from "react-icons/bs"

import MovieCard from "../components/MovieCard";

import './Movie.css'

const movieUrl = import.meta.env.VITE_API
const apiKey = import.meta.env.VITE_API_KEY

const Movie = () => {
  const {id} = useParams()
  const [movie, setMovie] = useState(null)

  const getMovie = async(url) => {
    const rest = await fetch(url)
    const data = await rest.json()

    setMovie(data);
  }

  const formatCurreny = (Number) => {
    return Number.toLocaleString("en-US", {
      style: 'currency',
      currency: 'USD'
    })
  }

  useEffect(() => {
    const moviefilme = `${movieUrl}${id}?${apiKey}`

    getMovie(moviefilme)
  },[])


  return (
    <div className="movie-page">
      {movie && 
      <>
        <MovieCard movie={movie} showLink={false} />
        <p className="tagline">{movie.tagline}</p>
        <div className="info">
          <h3>
            <BsWallet2 /> budget:
          </h3>
          <p>
            {formatCurreny(movie.budget)}
          </p>
        </div>
        <div className="info">
          <h3>
            <BsGraphUp /> Revenue:
          </h3>
          <p>
            {formatCurreny(movie.revenue)}
          </p>
        </div>
        <div className="info">
          <h3>
            <BsHourglassSplit /> duration:
          </h3>
          <p>
            {movie.runtime} minute
          </p>
        </div>
        <div className="info description">
          <h3>
            <BsFillFileEarmarkTextFill /> description:
          </h3>
          <p>
            {movie.overview} minute
          </p>
        </div>
      </>
      }
    </div>
  )
}

export default Movie
