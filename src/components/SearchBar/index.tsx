import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';

interface SearchBarProps {
  searchTerm: string;
  onSearch: (searchTerm: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ searchTerm, onSearch }) => {
  const [localSearchTerm, setLocalSearchTerm] = useState(searchTerm);
  const navigate = useNavigate();

  useEffect(() => {
    setLocalSearchTerm(searchTerm);
  }, [searchTerm]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocalSearchTerm(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    onSearch(localSearchTerm);
    navigate(`/?search=${localSearchTerm}`);
  };

  return (
    <section className="header">
      <h1 className="title">Search the Actresses</h1>

      <form className="search-form" onSubmit={handleSubmit}>
        <input
          id="actress-input"
          className="search-input"
          type="text"
          placeholder="e.g., Robbie..."
          value={localSearchTerm}
          onChange={handleInputChange}
        />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
    </section>
  );
};

export default SearchBar;
