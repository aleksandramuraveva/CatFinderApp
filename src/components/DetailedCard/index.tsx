import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import CardLoader from '../CardLoader';

import useThemeContext from '../../hooks/useThemeContext';
import { Actress } from '../../types';
import './styles.css';

interface Params {
  [key: string]: string | undefined;
  id: string;
}

interface DetailedCardProps {
  actress?: Actress;
  setSelectedActress?: (actress: Actress | null) => void;
}

const DetailedCard: React.FC<DetailedCardProps> = () => {
  const { name } = useParams<Params>();
  const navigate = useNavigate();
  const [actress, setActress] = useState<Actress | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const { theme } = useThemeContext();

  const apiKey = import.meta.env.VITE_API_KEY;


  useEffect(() => {
    setIsLoading(true);
    fetch(`https://api.api-ninjas.com/v1/cats?name=${name}`, {
      method: 'GET',
      headers: {
        'X-Api-Key': apiKey,
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          setActress(data[0]);
        } else {
          setActress(null);
        }
        setIsLoading(false);
      });
  }, [name]);

  if (isLoading) {
    return <CardLoader />;
  }

  if (!actress) {
    return null;
  }
  return (
    <aside role="aside" className={`${theme} details-container`}>
      <div className="card details-card">
        <div className=" details-content">
          <img
            className="details-image"
            src={actress.image_link}
            alt="actress.name"
          />
          <h2>{actress.name}</h2>
          <p>Origin: {actress.origin}</p>
          <p>Length: {actress.length}</p>
          <p>
            Weight: {actress.min_weight} - {actress.max_weight} lbs
          </p>
          <p>
            Life Expectancy: {actress.min_life_expectancy} -{' '}
            {actress.max_life_expectancy} years
          </p>
          <p>Family Friendly: {actress.family_friendly}</p>
          <p>Shedding: {actress.shedding}</p>
          <p>General Health: {actress.general_health}</p>
          <p>Playfulness: {actress.playfulness}</p>
          <p>Meowing: {actress.meowing}</p>
          <p>Children Friendly: {actress.children_friendly}</p>
          <p>Stranger Friendly: {actress.stranger_friendly}</p>
          <p>Grooming: {actress.grooming}</p>
          <p>Intelligence: {actress.intelligence}</p>
          <p>Other Pets Friendly: {actress.other_pets_friendly}</p>
          <button
            className="close-button"
            onClick={() => {
              const searchTerm = localStorage.getItem('searchTerm') || '';
              const page = 1;
              /*const page = localStorage.getItem('currentPage') || '1';*/
              navigate(`/?name=${searchTerm}&page=${page}`);
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
