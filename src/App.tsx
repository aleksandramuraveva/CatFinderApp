import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import ResultsList from './components/ResultsList';
import Loader from './components/Loader';
import ErrorButton from './components/ErrorButton';
import Pagination from './components/Pagination';
import { Actress } from './types';

const App: React.FC = () => {
  const [actresses, setActresses] = useState<Actress[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  const [hasError, setHasError] = useState<boolean>(false);

  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 8;

  const lastCardIndex = currentPage * cardsPerPage;
  const firstCardIndex = lastCardIndex - cardsPerPage;
  const currentCards = actresses.slice(firstCardIndex, lastCardIndex);
  console.log(actresses.length);

  useEffect(() => {
    const storedSearchTerm = localStorage.getItem('searchTerm') || '';
    setSearchTerm(storedSearchTerm);
    const url = storedSearchTerm
      ? `https://freetestapi.com/api/v1/actresses?search=${storedSearchTerm}`
      : 'https://freetestapi.com/api/v1/actresses';
    fetchActresses(url);
  }, []);

  const fetchActresses = (url: string) => {
    setLoading(true);
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setActresses(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  };

  const handleSearch = (newSearchTerm: string) => {
    localStorage.setItem('searchTerm', newSearchTerm);
    setSearchTerm(newSearchTerm);
    const specificActressUrl = `https://freetestapi.com/api/v1/actresses?search=${newSearchTerm}`;
    fetchActresses(specificActressUrl);
  };

  const handleError = () => {
    setHasError(true);
  };

  if (hasError) {
    throw new Error('Well you crashed me!=)');
  }

  return (
    <div>
      <SearchBar searchTerm={searchTerm} onSearch={handleSearch} />
      <ErrorButton onError={handleError} />
      <Pagination
        totalCards={actresses.length}
        cardsPerPage={cardsPerPage}
        setCurrentPage={setCurrentPage}
      />
      {loading ? <Loader /> : <ResultsList actresses={currentCards} />}
    </div>
  );
};

export default App;
