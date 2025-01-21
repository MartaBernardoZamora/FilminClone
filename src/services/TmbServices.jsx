
//archivo será responsable de gestionar las llamadas a la API de TMDb utilizando Axios.
import axios from 'axios';


// Base URL y clave API desde las variables de entorno
const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = import.meta.env.VITE_TMDB_API_KEY; // Asegúrate de tener esta variable en tu archivo .env

// Configuración de Axios
const ApiClient = axios.create({
  baseURL: BASE_URL, // Establecer la base URL para todas las peticiones
  params: {
    api_key: API_KEY, // Usar la clave de API desde el entorno
    language: 'es-ES', // Cambiar el idioma según lo desees
  },
});

// Función para llamar a la api
async function getData(endpoint, params = {}){
  try {
    const response = await ApiClient.get(endpoint, { params }); // Llamar al endpoint de películas populares
    return response.data; // Devuelve los resultados de las películas populares
  } catch (error) {
    console.error('Error getData:', error);
    throw error; // Propaga el error para manejarlo en otro lugar si es necesario
  }
};


export function getProductById(productType, productId, params={}) {
  return getData(`/${productType}/${productId}`, {append_to_response:params});
}
export function getProductsByList(productType, productList) {
  return getData(`/${productType}/${productList}`);
}
export function getProductsBySearch(search){
  return getData('/search/multi', {query:search});
}
export function getProductsByTrendy(productType, time='week'){
  return getData(`/trending/${productType}/${time}`);
}

  
