import { useState } from 'react';
import { toast } from 'react-toastify';
import { IconContext } from 'react-icons';
import { FaSearch } from 'react-icons/fa';
import PropTypes from 'prop-types';
import css from './Searchbar.module.css';

function Searchbar({ onSubmit }) {
  const [query, setQuery] = useState('');
  const [lastQuery, setLastQuery] = useState('');

  const handleSearchQueryChange = e => {
    setQuery(e.currentTarget.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (query.trim() === '') {
      toast.info('Please enter a search query');
      return;
    }

    if (query === lastQuery) {
      toast.info(
        'Sorry, the result of this request is already in front of you, try another way'
      );
      return;
    }

    onSubmit(query);
    setQuery('');
    setLastQuery(query);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className={css.searchForm}>
        <input
          type="text"
          name="searchQuery"
          value={query}
          onChange={handleSearchQueryChange}
          autoComplete="off"
          autoFocus
          placeholder="Search movie"
          className={css.searchInput}
        />
        <button type="submit" className={css.searchButton}>
          <IconContext.Provider value={{ color: '#007bff', size: 20 }}>
            <FaSearch className={css.searchIcon} />
          </IconContext.Provider>
          <label className={css.searchLabel}>Search</label>
        </button>
      </form>
    </div>
  );
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
