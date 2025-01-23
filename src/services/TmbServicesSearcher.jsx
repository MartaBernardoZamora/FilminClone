import { getData } from './TmbServices';

export async function searchContent(query) {
  try {
    const data = await getData('/search/multi', { query });
    return data.results;
  } catch (error) {
    console.error('No hay resultados para esta búsqueda', error);
    throw error;
  }
}