import {getData} from "./TmbServices";

export async function getGenerationalSeriesCarousel(productType){
        try {
          const data = await getData(`/${productType}/popular`);
          return data.results;
        } catch (error) {
          console.error('No hay resultados', error);
          throw error;
        }
      }
export default getGenerationalSeriesCarousel;