import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import {Spinner} from 'react-bootstrap';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const MovieCarousel = ({ querySearch }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const apiKey = '3fc57be4'; // Sostituisci con la tua chiave API OMDB
        const apiUrl = `http://www.omdbapi.com/?s=${querySearch}&apikey=${apiKey}`;
        const response = await fetch(apiUrl);
        const data = await response.json();
        if (data.Response === "True") {
          // Filtra solo i risultati di tipo "movie"
          const filteredMovies = data.Search.filter((movie) => movie.Type === "movie");
          setMovies(filteredMovies);
        } else {
          setError("Nessun risultato trovato.");
        }
      } catch (error) {
        console.error("Errore durante il recupero dei film:", error);
        setError("Si è verificato un errore durante il recupero dei film.");
      } finally {
        setLoading(false);
      }
    };

fetchMovies();
}, [querySearch]);

if (loading) {
  return <div className="text-center mt-3">
  <Spinner animation="border" role="status">
    <span className="sr-only">Loading...</span>
  </Spinner>
  <p>Loading...</p>
</div>
}

if (error) {
  return <div>Error: {error}</div>;
}

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
  };

  return (
    <div>
      <Slider {...settings}>
        {movies.map((movie) => (
           <div key={movie.imdbID} className="movie-item">
           <img
             src={movie.Poster}
             alt={movie.Title}
             className="movie-image"
           />
           <p className="movie-title">{movie.Title}</p>
         </div>
        ))}
      </Slider>
    </div>
  );
};

export default MovieCarousel;
