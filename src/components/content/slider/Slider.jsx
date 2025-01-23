
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { fetchMedia } from '../../../services/TmbServicesMedia';
import SliderCard from './SliderCard';
import './Slider.css';


function Slider() {
  const [mediaItems, setMediaItems] = useState([]);
  const [loading, setLoading] =useState(true);
  const [error, setError] =useState(null);
  const [activeTrailer, setActiveTrailer] = useState(null); 

useEffect(() =>{
  async function loadMedia() {
    try{
      const mediaData = await fetchMedia();
      setMediaItems(mediaData);
    } catch(err){
      console.error('Error fetching media:', err);
      setError('Error al cargar  los datos. Por favor, intenta  de nuevo.');
    } finally{
      setLoading(false);
    }
    
  }
  loadMedia();
},[]);

 // Función para manejar el tráiler
 const handlePlayTrailer = (id, mediaType) => {
  const selectedMedia = mediaItems.find((item) => item.id === id);
  if (selectedMedia) {
    setActiveTrailer({ id, mediaType, director: selectedMedia.director || "Varios Directores" });
  }
};

// Mientras carga o si hay error, mostramos mensajes adecuados  

if(loading) return <p>Cargando datos...</p>;
if(error) return <p>{error}</p>;

return(
  <div className="slider-container">
    <Swiper
    modules={[Navigation, Pagination, Autoplay]}
    navigation 
    pagination ={{clickable: true}}
    autoplay = {{
      delay: 3000,
      disableOnInteraction: false,
    }}
    loop={mediaItems.length > 1} // Solo activa el loop si hay más de un slide    
    slidesPerView={1}    
    >
      {mediaItems.map((media)=> (
        <SwiperSlide key={media.id}>
          <SliderCard 
          media={media}
          isActive={activeTrailer?.id === media.id}
          onPlayTrailer={() => handlePlayTrailer(media.id, media.media_type)}
          />
        </SwiperSlide>
      )) }
    </Swiper>
  </div>
 );
}

export default Slider;
