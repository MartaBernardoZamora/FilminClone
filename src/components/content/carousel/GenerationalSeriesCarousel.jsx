import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import "./GenerationalSeriesCarousel.css";
import getGenerationalSeriesCarousel from "../../../services/TmbServicesCarousel";
import ProductCard from "../productCard/ProductCard"

const GenerationalSeriesCarousel = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isModalVisible, setIsModalVisible] = useState(false);
  let productType="movie";
  
  const fetchMovies = async () => {
    try {
      const data = await getGenerationalSeriesCarousel(productType);
      if (data) {
        setMovies(data);
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
  console.log(movies)
  return (
    <div className="carousel-container">
      <h1 className="carousel-title">Series Generacionales</h1>
      <Swiper
        modules={[Navigation]}
        spaceBetween={15}
        slidesPerView={6}
        slidesPerGroup={5}
        navigation
        loop={false}
      >
        {movies.map((movie) => (
          <SwiperSlide key={movie.id}>
            <ProductCard key={movie.id} id={movie.id} type={productType} />
            {/*<div className="movie-card" onMouseEnter={toggleModal}>
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
              {productType == "tv" && (<p className="isSerie">SERIE</p>)}
              <Modal 
                    productId={movie.id}
                    productType={productType}
                    isModalVisible={isModalVisible}
                    onMouseLeave={toggleModal} />
            </div>*/}
          </SwiperSlide>

        ))}
      </Swiper>
    </div>
  );
};

export default GenerationalSeriesCarousel;
