import React from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import ResultsList from './components/ResultsList';

interface Actress {
  image: string;
  name: string;
  birth_year: number;
  nationality: string;
}

interface State {
  actresses: Actress[];
  searchTerm: string;
}

class App extends React.Component<Record<string, never>, State> {
  state = {
    actresses: [],
    searchTerm: '',
  };

  componentDidMount() {
    this.fetchActresses('https://freetestapi.com/api/v1/actresses');
  }

  fetchActresses = (url: string) => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        this.setState({ actresses: data });
      })
      .catch(error => console.error('Error fetching data:', error));
  };

  handleSearch = (searchTerm: string) => {
    this.setState({ searchTerm });

    const specificActressUrl = `https://freetestapi.com/api/v1/actresses?search=${searchTerm}`;
    this.fetchActresses(specificActressUrl);
  };

  render() {
    const { actresses, searchTerm } = this.state;

    return (
      <div>
        <SearchBar searchTerm={searchTerm} onSearch={this.handleSearch} />
        <ResultsList actresses={actresses} />
      </div>
    );
  }
}

export default App;
