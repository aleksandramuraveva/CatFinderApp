import React from 'react';
import { useState } from 'react';
import './styles.css';

interface SearchBarProps {
  onSearch: (searchTerm: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState(
    localStorage.getItem('searchTerm') || '',
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <section className="header">
      <h1>Search the Actresses</h1>

      <form className="search-form" onSubmit={handleSubmit}>
        <input
          id="actress-input"
          className="search-input"
          type="text"
          placeholder="e.g., Robbie..."
          value={searchTerm}
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
