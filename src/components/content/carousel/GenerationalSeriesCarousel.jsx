import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import "./GenerationalSeriesCarousel.css";

const TMDB_API_KEY = "69fb9f80ba36bf64fb8df3a0312a15e6"; 
const TMDB_API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${TMDB_API_KEY}&language=en-US&page=1`;

const GenerationalSeriesCarousel = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchMovies = async () => {
    try {
      console.log("Fetching movies from TMDB...");
      const response = await fetch(TMDB_API_URL);
      const data = await response.json();
      console.log("Fetched data:", data);
      if (data.results) {
        setMovies(data.results);
      } else {
        console.error("Movies loading error:", data);
      }
    } catch (error) {
      console.error("API Error:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  if (loading) {
    return <div className="carousel-container">Data loading...</div>;
  }

  return (
    <div className="carousel-container">
      <h1 className="carousel-title">Series Generacionales</h1>
      <Swiper
        modules={[Navigation]}
        spaceBetween={15}
        slidesPerView={6}
        slidesPerGroup={5}
        navigation
        //pagination={{ clickable: true }}
       // autoplay={{
       //   delay: 3000, // Autoremote
       //   disableOnInteraction: false, // Continue after user interaction
       // }}
        loop={false}
        /*</div>breakpoints={{
          320: { slidesPerView: 2, spaceBetween: 10 }, 
          768: { slidesPerView: 5, spaceBetween: 15 }, 
          1024: { slidesPerView: 10, spaceBetween: 20 }, 
        }}*/
      >
        {movies.map((movie) => (
          <SwiperSlide key={movie.id}>
            <div className="movie-card">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
              {/*<h3>{movie.title}</h3>*/}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default GenerationalSeriesCarousel;
