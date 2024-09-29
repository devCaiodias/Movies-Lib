import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"
import MovieCard from '../components/MovieCard';

const searchUrl = import.meta.env.VITE_SEARCH
const apiKey = import.meta.env.VITE_API_KEY

import './MovieGrid.css'

const Search = () => {
  const [searchParams] = useSearchParams()

  const [movie, setMovie] = useState([])
  const query = searchParams.get("q")


  const getSearchedMovies = async (url) => {
    const res = await fetch(url)
    const data = await res.json();

    setMovie(data.results);
  };

  useEffect(() => {
    const searchWithQueryUrll = `${searchUrl}?${apiKey}&query=${query}`;
    
    getSearchedMovies(searchWithQueryUrll)
  }, [query])

  return (
    <div className="container">
      <h2 className="title">Resultado para: <span className="query-text">{query}</span></h2>
      <div className="movies-container">
        {movie.length === 0 && <p>Carregando...</p> }
        {movie.length > 0 && movie.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  )
}

export default Search
