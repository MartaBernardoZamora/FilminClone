import React, { useEffect, useState } from 'react';
import {getProductById, getProductsByList, getProductsBySearch, getProductsByTrendy} from './services/TmbServices.jsx';

function Example(){
  let productId=278;//id de ejemplo
  let productList="popular";//lista de ejemplo
  let productType="movie";//=movie or tv or all or search or person
  let textSearch="Cadena Perpetua"; //ejemplo de búsqueda
  let trendyTime="week";
  let error;
 //La idea son varios ejemplos que puedan serviros de guía de como confeccionar las funciones según necesidades, más o menos son siempre iguales


//producto por id
  const [product, setProduct]=useState();
  useEffect(() => {
    async function fetchProduct() {
      try {        
        setProduct(await getProductById(productType, productId)); //producto por typo e id;
      } catch (error) {
        console.error('Error getProductById:', error);
        throw error; // Propaga el error para manejarlo en otro lugar si es necesario
      }
    }
    fetchProduct();
  }, []);
  console.log(product);







//productos por lista  
  const [list, setList]=useState();
  useEffect(() => {
    async function fetchList() {
      try {
        const data=await getProductsByList(productType, productList);
        setList(data.results); //////////////////AQUI ES DONDE HAY QUE ELEGIR RESULTS POR EJEMPLO
      } catch (error) {
        console.error('Error getProductById:', error);
        throw error; // Propaga el error para manejarlo en otro lugar si es necesario
      }
    }
    fetchList();
  }, []);
  //console.log(result);
  //console.log(list);
  const movies=list;//esto e para que se vea lo de Lanny






  
  //productos por busqueda  
  const [search, setSearch]=useState();
  useEffect(() => {
    async function fetchSearch() {
      try {
        setSearch(await getProductsBySearch(textSearch)); 
      } catch (error) {
        console.error('Error getProductById:', error);
        throw error; // Propaga el error para manejarlo en otro lugar si es necesario
      }
    }
    fetchSearch();
  }, []);
  //console.log(search);






  //productos por trendy  
  const [trendy, setTrendy]=useState();
  useEffect(() => {
    async function fetchTrendy() {
      try {
        setTrendy(await getProductsByTrendy(productType, trendyTime));
      } catch (error) {
        console.error('Error getProductById:', error);
      }
    }
    fetchTrendy();
  }, []);
  //console.log(trendy);





  //ESTA ES LA PARTE ANTIGUA DE LANNY (con cosas mias) POR SI SE NECESITA

  /*console.log(product);
  console.log(searchByTitle);
  console.log(movieById);
  console.log(trendys);
/*  const [movies, setMovies] = useState([]);
  const [error, setError] = useState('');

load PopularMovies es una funcion asincrona que va a llamar a la funcion getPopularMovies de TMBServices.jsx
y te va a dar una lista de pelivulas populares desde la API. Si la solicitud es exitosa se va a actualizarel 
estado de movies con los datos obtenidos.
Y si ocurre algun error(por ejemplo la API no responde ) te lo va a capturar y se actualiza el estado de 
ese error con un mensaje

  useEffect(() => {//fectching de la api
    const loadPopularMovies  = async () => {
      try {
        const popularMovies = await getPopularMovies;
        console.log('Películas populares obtenidas:', popularMovies);
        setMovies(popularMovies || []); // Asigna las películas al estado (si no hay resultados, asigna un array vacío)
      } catch (err) {
        console.error('Error al obtener películas populares:', err);
        setError('No se pudieron cargar las películas populares.');// Maneja el error en caso de fallar
      }
    };
  
    loadPopularMovies (); // Llama a la función para obtener las películas cuando el componente se monte
  }, []); //significa que este efecto solo se ejecutará una vez, justo después de que el componente se haya montado.

  /*En la renderizacion, lo primero es mostar un mensaje de que se esta cargando la pelicula mientras 
  espera los datos de la API*/
  return (
    <div>
      <h1>Películas Populares</h1>
      {error && <p>{error}</p>}
      {movies && movies.length > 0 ? (
        <ul>
          {movies.map((movie) => (
            <li key={movie.id}>{movie.title}</li>// Muestra el título de cada película
          ))}
        </ul>
      ) : (
        <p>Cargando películas...</p> // Si no hay películas, muestra el mensaje de carga
      )}
    </div>
  );
};

export default Example;

