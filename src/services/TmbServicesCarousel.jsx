import {getData} from "./TmbServices";

export async function getGenerationalSeriesCarousel(){
        try {
          const data = await getData('/movie/popular');
          return data.results;
        } catch (error) {
          console.error('No hay resultados', error);
          throw error;
        }
      }
export default getGenerationalSeriesCarousel;