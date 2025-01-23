import PropTypes from 'prop-types';
import './Slider.css';

// Función para renderizar las etiquetas dinámicas
function Tags({ media }) {
  return (
    <div className="tags">
      {media.media_type === 'tv' && (
        <span className="tag">
          {media.seasons || 1} TEMPORADA{media.seasons > 1 ? 'S' : ''}
        </span>
      )}
      <span className="tag exclusive">ESTRENO EXCLUSIVO</span>
    </div>
  );
}

// Función para renderizar el subtítulo dinámico
function Subtitle({ media }) {
  if (media.media_type === 'movie') {
    return <p className="slider-subtitle">{media.director || 'Director desconocido'}</p>;
  }
  return null; // No mostrar subtítulo para TV
}

// Componente principal de la tarjeta
function SliderCard({ media }) {
  return (
    <div
      className="slider-card"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${media.backdrop_path})`,
      }}
    >
      {/* Capa oscura para el fondo */}
      <div className="slider-overlay"></div>

      <div className="slider-card-content">
        {/* Renderiza los tags */}
        <Tags media={media} />

        {/* Título de la película o serie */}
        <h3 className="slider-title">{media.title || media.name}</h3>

        {/* Renderiza el subtítulo dinámico */}
        <Subtitle media={media} />

        {/* Botón para ver más detalles o el tráiler */}
        <button
          className="slider-button"> Ver Ahora </button>
      </div>
    </div>
  );
}

// Validación de propiedades con PropTypes
SliderCard.propTypes = {
  media: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string,
    name: PropTypes.string,
    backdrop_path: PropTypes.string.isRequired,
    media_type: PropTypes.oneOf(['movie', 'tv']).isRequired,
    director: PropTypes.string,
    seasons: PropTypes.number,
  }).isRequired,  
};

Tags.propTypes = {
  media: PropTypes.shape({
    media_type: PropTypes.oneOf(['movie', 'tv']).isRequired,
    seasons: PropTypes.number,
  }).isRequired,
};

Subtitle.propTypes = {
  media: PropTypes.shape({
    media_type: PropTypes.oneOf(['movie', 'tv']).isRequired,
    director: PropTypes.string,
    seasons: PropTypes.number,
  }).isRequired,
};

export default SliderCard;

