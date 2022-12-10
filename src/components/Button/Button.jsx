import css from './Button.module.css';
import React from 'react';
import PropTypes from 'prop-types';

export const Button = props => {
  const clickHandler = e => {
    e.preventDefault();
    props.onClick(1);
  };

  return (
    <button type="button" className={css.button} onClick={clickHandler}>
      Load more
    </button>
  );
};

Button.propTypes = {
  clickHandler: PropTypes.func,
};
