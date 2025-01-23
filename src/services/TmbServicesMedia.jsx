// Obtiene las listas de las peliculas y series populares de la Api
import { getProductsByTrendy, getProductById } from './TmbServices'; 

export async function fetchMedia() {
  const [movies, tvShows] = await Promise.all([
    getProductsByTrendy('movie'),
    getProductsByTrendy('tv'),
  ]);

  const combinedMedia = [...movies.results, ...tvShows.results];

  const detailedMedia = await Promise.all(
    combinedMedia.map(async (media) => {
      let additionalData = {};

      if (media.media_type === 'movie') {
        const details = await getProductById('movie', media.id, 'credits,videos');
        additionalData.director = details.credits.crew.find(
          (person) => person.job === 'Director'
        )?.name;

        // Obtener el tráiler
        const trailer = details.videos.results.find((video) => video.type === 'Trailer');
        additionalData.trailerKey = trailer ? trailer.key : null;
      } else if (media.media_type === 'tv') {
        const details = await getProductById('tv', media.id, 'videos');
        additionalData.seasons = details.number_of_seasons;

        // Obtener el tráiler
        const trailer = details.videos.results.find((video) => video.type === 'Trailer');
        additionalData.trailerKey = trailer ? trailer.key : null;
      }

      return {
        ...media,
        ...additionalData,
      };
    })
  );

  return interleaveArrays(
    detailedMedia.filter((item) => item.media_type === 'movie'),
    detailedMedia.filter((item) => item.media_type === 'tv')
  );
}

function interleaveArrays(array1, array2) {
  const maxLength = Math.max(array1.length, array2.length);
  const interleaved = [];

  for (let i = 0; i < maxLength; i++) {
    if (i < array1.length) interleaved.push(array1[i]);
    if (i < array2.length) interleaved.push(array2[i]);
  }

  return interleaved;
}
