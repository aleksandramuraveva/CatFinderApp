import React, { useState, useEffect } from 'react';
import SearchBar from '../SearchBar';
import ResultsList from '../ResultsList';
import Loader from '../Loader';
import Pagination from '../Pagination';
import ToggleButton from '../ToggleButton';
import Flyout from '../Flyout';
import { Actress } from '../../types';
import { Outlet, useNavigate, useSearchParams } from 'react-router-dom';
import './styles.css';

import { useContext } from 'react';
import { ThemeContext } from '../../contexts/themeContext.tsx';

const MainContent: React.FC = () => {
  const [actresses, setActresses] = useState<Actress[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  

  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 8;

  const lastCardIndex = currentPage * cardsPerPage;
  const firstCardIndex = lastCardIndex - cardsPerPage;
  const currentCards = actresses.slice(firstCardIndex, lastCardIndex);

  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    const storedSearchTerm = localStorage.getItem('searchTerm') || '';
    setSearchTerm(storedSearchTerm);
    const url = storedSearchTerm
      ? `https://freetestapi.com/api/v1/actresses?search=${storedSearchTerm}`
      : 'https://freetestapi.com/api/v1/actresses';
    fetchActresses(url);

    const urlPage = parseInt(searchParams.get('page') || '1');
    setCurrentPage(urlPage);
  }, [searchParams]);

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
    setCurrentPage(1);
    const specificActressUrl = `https://freetestapi.com/api/v1/actresses?search=${newSearchTerm}`;
    fetchActresses(specificActressUrl);
    navigate(`/?search=${newSearchTerm}`);
  };

 

  return (
    <>
      <main className={theme}>
        <SearchBar searchTerm={searchTerm} onSearch={handleSearch} />
        {<ToggleButton />}
        <Pagination
          totalCards={actresses.length}
          cardsPerPage={cardsPerPage}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
        {loading ? <Loader /> : <ResultsList actresses={currentCards} />}
        <Flyout />
      </main>
      <Outlet />
    </>
  );
};

export default MainContent;
