import React from 'react';
import ResultCard from './ResultCard';
import './styles.css';

interface Actress {
  image: string;
  name: string;
  birth_year: number;
  nationality: string;
}

interface ResultsListProps {
  actresses: Actress[];
}

class ResultsList extends React.Component<ResultsListProps> {
  render() {
    const { actresses } = this.props;

    return (
      <section className="container results">
        {actresses.map((actress) => (
          <ResultCard key={actress.name} actress={actress} />
        ))}
      </section>
    );
  }
}

export default ResultsList;
