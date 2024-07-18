import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Actress } from '../../types';
import ResultCard from './ResultCard';
import './styles.css';

interface ResultsListProps {
  actresses: Actress[];
}

const ResultsList: React.FC<ResultsListProps> = ({ actresses }) => {
  const navigate = useNavigate();

  const handleCardClick = (actress: Actress) => {
    navigate(`/details/${actress.id}`);
  };

  return (
    <section className="container results">
      {actresses.length > 0 ? (
        actresses.map((actress) => (
          <ResultCard
            key={actress.name}
            actress={actress}
            handleCardClick={handleCardClick}
          />
        ))
      ) : (
        <p className="results-message">No actresses found</p>
      )}
    </section>
  );
};

export default ResultsList;
