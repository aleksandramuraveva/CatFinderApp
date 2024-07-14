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
    console.log(actress)
  };

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
