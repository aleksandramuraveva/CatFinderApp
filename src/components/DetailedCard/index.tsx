import React from 'react';
import './styles.css';
import { Actress } from '../types';

interface DetailedCardProps {
  actress: Actress;
  setSelectedActress: (actress: Actress | null) => void;
}

const DetailedActress: React.FC<DetailedCardProps> = ({
  actress,
  setSelectedActress,
}) => {
  return (
    <aside className="details-container">
      <div className="card details-card">
        <div className="content details-content">
          <img src={actress.image} alt="photo" />
          <h2>{actress.name}</h2>
          <p>Birth Year: {actress.birth_year}</p>
          <p>Nationality: {actress.nationality}</p>
          <p>Most Famous Movies: {actress.most_famous_movies.join(', ')}</p>
          <p>Awards: {actress.awards}</p>
          <p>Biography: {actress.biography}</p>
          <button
            className="close-button"
            onClick={() => setSelectedActress(null)}
          >
            Close
          </button>
        </div>
      </div>
    </aside>
  );
};

export default DetailedActress;

// interface DetailedCardProps {
//   actress: Actress;
//   onClose: () => void;
// }

// const DetailedCard: React.FC<DetailedCardProps> = ({ actress, onClose }) => {
//   return (
//     <div>
//       <h2>{actress.name}</h2>
//       {/* Display more details about the actress here */}
//       <button onClick={onClose}>Close</button>
//     </div>
//   );
// };

// export default DetailedCard;
