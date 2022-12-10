import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';

import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';
import { Loader } from './Loader/Loader';
import { Button } from './Button/Button';
import { Modal } from './Modal/Modal';

const API_KEY = '19743646-38e1a9cdaadffbdd4b9ec2ba3';

export const App = () => {
  let [request, setRequest] = useState('');
  let [pictures, setPictures] = useState([]);
  let [isLoading, setIsLoading] = useState(false);
  let [page, setPage] = useState(1);
  let [maxPage, setMaxPage] = useState(0);
  let [total, setTotal] = useState(0);
  let [modal, setModal] = useState(false);
  let [largeURL, setLargeURL] = useState('');
  let [altText, setAlt] = useState('');

  const fetchImages = () => {
    fetch(
      `https://pixabay.com/api/?q=${request}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
    )
      .then(response => response.json())
      .then(data => {
        return (
          setPictures(page === 1 ? data.hits : [...pictures, ...data.hits]),
          setMaxPage((maxPage = Math.floor(data.totalHits / 12) + 1)),
          setTotal((total = data.totalHits))
        );
      })
      .catch(err => console.error(err))
      .finally(() => setIsLoading((isLoading = false)));
  };

  const loadMore = data => {
    setPage(prevPage => (page = prevPage + data));
    setIsLoading((isLoading = true));
  };

  const submitButton = quote => {
    setRequest((request = quote));
    setIsLoading((isLoading = true));
    setPage((page = 1));
  };
  const closeModal = () => {
    return setModal((modal = false));
  };

  const returnImage = e => {
    const imageURL = e.currentTarget.getAttribute('large');
    const alt = e.currentTarget.getAttribute('alt');
    return (
      setAlt((altText = alt)),
      setLargeURL((largeURL = imageURL)),
      setModal((modal = true))
    );
  };

  useEffect(() => fetchImages());

  return (
    <>
      <Searchbar onSubmit={quote => submitButton(quote)} />

      {isLoading && <Loader loading={isLoading} />}

      {pictures.length > 0 && (
        <ImageGallery>
          <ImageGalleryItem data={pictures} returnImage={returnImage} />
        </ImageGallery>
      )}
      {total > 12 && page <= maxPage ? (
        <Button onClick={data => loadMore(data)} />
      ) : (
        "That's all"
      )}
      {modal && (
        <Modal source={largeURL} alt={altText} closeModal={closeModal} />
      )}
    </>
  );
};

App.propTypes = {
  request: PropTypes.string,
  pictures: PropTypes.array,
  isLoading: PropTypes.bool,
  page: PropTypes.number,
  maxPage: PropTypes.number,
  total: PropTypes.number,
  modal: PropTypes.bool,
  largeURL: PropTypes.string,
  altText: PropTypes.number,
};
