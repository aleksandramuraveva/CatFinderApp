import React from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import ResultsList from './components/ResultsList';
import Loader from './components/Loader';

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
    loading: false,
  };

  componentDidMount() {
    const searchTerm = localStorage.getItem('searchTerm') || '';
    this.setState({ searchTerm });
    const url = searchTerm
      ? `https://freetestapi.com/api/v1/actresses?search=${searchTerm}`
      : 'https://freetestapi.com/api/v1/actresses';
    this.fetchActresses(url);
  }

  fetchActresses = (url: string) => {
    this.setState({ loading: true });
    fetch(url)
      .then(response => response.json())
      .then(data => {
        this.setState({ actresses: data, loading: false });
      })
      .catch(error => console.error('Error fetching data:', error));
      this.setState({ loading: false });
  };


  handleSearch = (searchTerm: string) => {
    localStorage.setItem('searchTerm', searchTerm);
    this.setState({ searchTerm });
    const specificActressUrl = `https://freetestapi.com/api/v1/actresses?search=${searchTerm}`;
    this.fetchActresses(specificActressUrl);
  };

  render() {
    const { actresses, searchTerm, loading } = this.state;

    return (
      <div>
        <SearchBar searchTerm={searchTerm} onSearch={this.handleSearch} />
        {loading ? <Loader /> : <ResultsList actresses={actresses} />}
      </div>
    );
  }
}

export default App;