import { Triangle } from 'react-loader-spinner';
import PropTypes from 'prop-types';

export const Loader = ({ loading }) => {
  return (
    <Triangle
      height="180"
      width="180"
      color="#3f51b5"
      ariaLabel="triangle-loading"
      wrapperStyle={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
      wrapperClassName
      visible={loading}
    />
  );
};

Loader.propTypes = {
  loading: PropTypes.bool.isRequired,
};
