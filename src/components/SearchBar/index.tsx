import React from 'react';
import './styles.css';


interface State {
  searchTerm: string;
}



class SearchBar extends React.Component<Record<string, never>, State> {
  state = {
    searchTerm: '',
  };

  handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ searchTerm: event.target.value });
  };

  render() {
    const { searchTerm } = this.state;

    return (
      <section className="header">
        <h1>Search the Actresses</h1>

        <form className="search-form">
          <input
            id="actress-input"
            className="search-input"
            type="text"
            placeholder="e.g., Robbie..."
            value={searchTerm}
            onChange={this.handleInputChange}
          />
          <button className="search-button" type="submit">
            Search
          </button>
        </form>
      </section>
    );
  }
}

export default SearchBar;
