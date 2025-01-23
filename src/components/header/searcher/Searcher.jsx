import React, { useState } from 'react';
import { searchContent } from '../../../services/TmbServicesSearcher';
import './Searcher.css';

function Searcher() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [isFocused, setIsFocused] = useState(false);

  const handleSearch = async (event) => {
    const searchQuery = event.target.value;
    setQuery(searchQuery);
    if (searchQuery.trim() === '') {
      setResults([]);
      return;
    }
    try {
      const searchResults = await searchContent(searchQuery);
      setResults(searchResults);
    } catch (error) {
      console.error('Error al realizar la búsqueda:', error);
    }
  };

  return (
    <div className="searcher-container">
      <img src="../src/components/header/searcher/buscar.png" alt="lupa" className='searcher-icon'/><input
        type="text"
        value={query}
        onChange={handleSearch}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setTimeout(() => setIsFocused(false), 200)}
        placeholder="Buscar por título, género, director o reparto..."
        className="searcher-input"
      />
      {query.trim() !== '' && results.length === 0 && (
          <span className='no-results'>
            No se han encontrado resultados
          </span>
        )}

      {isFocused && results.length > 0 && (
        <div className="results-container">
          {results.map((item) => (
            <div key={item.id} className="result-item">
              {item.poster_path || item.profile_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w154${item.poster_path || item.profile_path}`}
                  alt={item.title || item.name}
                  className="result-image"
                />
              ) : (
                <div className="result-placeholder" />
              )}
              <div className="result-text">
                <h4 className="result-title">{item.title || item.name}</h4>
                <p className="result-type">
                  {item.media_type === 'movie'
                    ? 'Película'
                    : item.media_type === 'tv'
                    ? 'Serie'
                    : 'Persona'}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Searcher;