import React from 'react';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './styles.css';

import { Actress } from '../../types';
interface Params {
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



  useEffect(() => {
    // Fetch the actress details based on the ID in the URL
    fetch(`https://freetestapi.com/api/v1/actresses/${id}`)
      .then((response) => response.json())
      .then((data) => setActress(data));
  }, [id]);

  if (!actress) {
    return null; // Or a loading spinner
  }

 return (
    <aside className="details-container">
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
            onClick={() => navigate('/')}
          >
            Close
          </button>
        </div>
      </div>
    </aside>
  );
};

export default DetailedCard;

