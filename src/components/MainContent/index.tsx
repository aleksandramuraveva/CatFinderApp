import { useState, useEffect } from 'react';
import SearchBar from '../SearchBar';
import ResultsList from '../ResultsList';
import Loader from '../Loader';
import Pagination from '../Pagination';
import ToggleButton from '../ToggleButton';
import Flyout from '../Flyout';
import { Actress } from '../../types';
import { Outlet, useNavigate, useSearchParams } from 'react-router-dom';
import './styles.css';

import useThemeContext from '../../hooks/useThemeContext';

import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

const apiKey = import.meta.env.VITE_API_KEY;

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

  const { theme } = useThemeContext();

  const selectedItems = useSelector(
    (state: RootState) => state.selectedItems.items,
  );

  useEffect(() => {
    const storedSearchTerm = localStorage.getItem('searchTerm') || '';
    setSearchTerm(storedSearchTerm);
    const url = storedSearchTerm
      ? `https://api.api-ninjas.com/v1/cats?name=${storedSearchTerm}`
      : 'https://api.api-ninjas.com/v1/cats?min_weight=0.5';
    fetchActresses(url);

    const urlPage = parseInt(searchParams.get('page') || '1');
    setCurrentPage(urlPage);
  }, [searchParams]);

  const fetchActresses = (url: string) => {
    setLoading(true);
    fetch(url, {
      method: 'GET',
      headers: {
        'X-Api-Key': apiKey,
        'Content-Type': 'application/json',
      },
    })
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
    const trimmedSearchTerm = newSearchTerm.trim();
    const searchTermToUse = trimmedSearchTerm
      ? `name=${trimmedSearchTerm}`
      : 'min_weight=0.5';

    localStorage.setItem('searchTerm', trimmedSearchTerm);
    setSearchTerm(trimmedSearchTerm);
    setCurrentPage(1);

    const specificActressUrl = trimmedSearchTerm
      ? `https://api.api-ninjas.com/v1/cats?${searchTermToUse}`
      : 'https://api.api-ninjas.com/v1/cats?min_weight=0.5';

    fetchActresses(specificActressUrl);
    navigate(`/?${searchTermToUse}`);
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
        {selectedItems.length > 0 && <Flyout />}
      </main>
      <Outlet />
    </>
  );
};

export default MainContent;
