import css from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';

export const ImageGalleryItem = ({ data, returnImage }) => {
  return (
    <>
      {data.map(item => (
        <li className={css.galleryItem} key={item.id}>
          <img
            className={css.galleryItem_image}
            src={item.webformatURL}
            alt={item.tags}
            large={item.largeImageURL}
            onClick={returnImage}
          />
        </li>
      ))}
    </>
  );
};

ImageGalleryItem.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  returnImage: PropTypes.func.isRequired,
};
