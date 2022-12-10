import React, { useState } from 'react';
import css from './Searchbar.module.css';
import PropTypes from 'prop-types';

export const Searchbar = props => {
  let [query, setQuery] = useState('');
  const takeQuery = e => {
    e.preventDefault();
    const form = e.currentTarget.elements;
    const request = form.request.value;
    setQuery((query = request));
    props.onSubmit(query);
    e.currentTarget.reset();
  };

  return (
    <header className={css.searchbar}>
      <form className={css.form} onSubmit={takeQuery}>
        <button type="submit" className={css.button}>
          <span className={css.buttonText}>Search</span>
        </button>

        <input
          className={css.input}
          name="request"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};

Searchbar.propTypes = {
  query: PropTypes.string,
};
