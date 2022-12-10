import css from './Modal.module.css';
import PropTypes from 'prop-types';

export const Modal = ({ source, alt, closeModal }) => {
  return (
    <div className={css.overlay}>
      <div className={css.modal}>
        <img src={source} alt={alt} />
        <button type="button" className={css.button} onClick={closeModal}>
          x
        </button>
      </div>
    </div>
  );
};

Modal.propTypes = {
  source: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
};
