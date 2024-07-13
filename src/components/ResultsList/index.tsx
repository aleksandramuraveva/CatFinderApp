import React from 'react';
import ResultCard from './ResultCard';
import './styles.css';
import { Actress } from '../types';

interface ResultsListProps {
  actresses: Actress[];
  handleCardClick: (actress: Actress) => void;
}

const ResultsList: React.FC<ResultsListProps> = ({
  actresses,
  handleCardClick,
}) => {
  return (
    <section className="container results">
      {actresses.map((actress) => (
        <ResultCard
          key={actress.name}
          actress={actress}
          handleCardClick={handleCardClick}
        />
      ))}
    </section>
  );
};

export default ResultsList;
