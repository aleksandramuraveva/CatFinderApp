import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import CardLoader from '../CardLoader';
import './styles.css';

import { Actress } from '../../types';
interface Params {
  [key: string]: string | undefined;
  id: string;
}

interface DetailedCardProps {
  actress: Actress;
  setSelectedActress: (actress: Actress | null) => void;
}

const DetailedCard: React.FC<DetailedCardProps> = () => {
  const { id } = useParams<Params>();
  const navigate = useNavigate();
  const [actress, setActress] = useState<Actress | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    fetch(`https://freetestapi.com/api/v1/actresses/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setActress(data);
        setIsLoading(false);
      });
  }, [id]);

  if (isLoading) {
    return <CardLoader />;
  }

  if (!actress) {
    return null;
  }
  return (
    <aside role="aside" className="details-container">
      <div className="card details-card">
        <div className=" details-content">
          <img className="details-image" src={actress.image} alt="photo" />
          <h2>{actress.name}</h2>
          <p>Birth Year: {actress.birth_year}</p>
          <p>Nationality: {actress.nationality}</p>
          <p>Most Famous Movies: {actress.most_famous_movies.join(', ')}</p>
          <p>Awards: {actress.awards}</p>
          <p>Biography: {actress.biography}</p>
          <button
            className="close-button"
            onClick={() => {
              const searchTerm = localStorage.getItem('searchTerm') || '';
              const page = localStorage.getItem('currentPage') || '1';
              navigate(`/?search=${searchTerm}&page=${page}`);
            }}
          >
            Close
          </button>
        </div>
      </div>
    </aside>
  );
};

export default DetailedCard;
