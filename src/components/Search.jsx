import React from 'react';

class Search extends React.Component {
  state = {
    search: '',
    type: 'all',
  };

  handleKey = (e) => {
    if (e.key === 'Enter') {
      this.props.searchMovies(this.state.search, this.state.type);
    }
  };

  handleSearch = () => {
    this.props.searchMovies(this.state.search, this.state.type);
  };

  handelChange = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState(
      () => ({ [name]: value }),
      () => {
        this.props.searchMovies(this.state.search, this.state.type);
      }
    );
  };

  render() {
    const { type } = this.state;

    return (
      <div>
        <div className='input-field'>
          <input
            className='validate'
            value={this.state.search}
            type='email'
            onChange={(e) => this.setState({ search: e.target.value })}
            onKeyDown={this.handleKey}
          />
          <button className='btn search-btn' onClick={this.handleSearch}>
            Search
          </button>
        </div>
        <div className='movies-type-grop'>
          <label>
            <input
              className='with-gap'
              name='type'
              type='radio'
              value='all'
              onChange={this.handelChange}
              checked={type === 'all'}
            />
            <span>All</span>
          </label>

          <label>
            <input
              className='with-gap'
              name='type'
              type='radio'
              value='movie'
              onChange={this.handelChange}
              checked={type === 'movie'}
            />
            <span>Movie</span>
          </label>

          <label>
            <input
              className='with-gap'
              name='type'
              type='radio'
              value='series'
              onChange={this.handelChange}
              checked={type === 'series'}
            />
            <span>Series</span>
          </label>
        </div>
      </div>
    );
  }
}

export { Search };
