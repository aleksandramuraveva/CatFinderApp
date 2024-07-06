import React from 'react';
import './styles.css';

interface Actress {
  image: string;
  name: string;
  birth_year: number;
  nationality: string;
}

interface ResultCardProps {
  actress: Actress;
}

class ResultCard extends React.Component<ResultCardProps> {
  render() {
    const { actress } = this.props;

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
  }
}

export default ResultCard;
