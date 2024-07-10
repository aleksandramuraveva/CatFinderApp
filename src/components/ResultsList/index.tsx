import React from 'react';
import ResultCard from './ResultCard';
import './styles.css';
import { Actress } from '../types';

interface ResultsListProps {
  actresses: Actress[];
}

const ResultsList: React.FC<ResultsListProps> = ({ actresses }) => {
  return (
    <section className="container results">
      {actresses.map((actress) => (
        <ResultCard key={actress.name} actress={actress} />
      ))}
    </section>
  );
};

export default ResultsList;
