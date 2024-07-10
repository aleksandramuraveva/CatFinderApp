import React from 'react';
import './styles.css';
import { Actress } from '../types';

interface ResultCardProps {
  actress: Actress;
}

const ResultCard: React.FC<ResultCardProps> = ({ actress }) => {
  return (
    <div className="card">
      <div className="content">
        <img src={actress.image} alt="photo" />
        <h2>{actress.name}</h2>
        <p>Birth Year: {actress.birth_year}</p>
        <p>Nationality: {actress.nationality}</p>
      </div>
    </div>
  );
};

export default ResultCard;
