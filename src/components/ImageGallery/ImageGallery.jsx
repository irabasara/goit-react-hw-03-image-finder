import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Loader } from 'components/Loader/Loader';
import css from './image-gallery.module.css';
import { Component } from 'react';
import { Error } from 'components/Error/Error';
import { Start } from 'components/Start/Start';
import Gallery from '../../utils/pixabayAPI';
import { Button } from 'components/Button/Button';
import { Modal } from 'components/Modal/Modal';
// import { Button } from 'components/Button/Button';

export class ImageGallery extends Component {
  state = {
    gallery: null,
    error: null,
    status: 'idle',
    page: 1,
    isShowModal: false,
    largeImage: {
      largeImageURL: null,
      tags: '',
    },
  };

  loadImages = () => {
    const { search } = this.props;
    const { page } = this.state;
    Gallery.getGallery(search, page)
      .then(gallery => {
        this.setState(prevState => ({
          gallery:
            page === 1 ? gallery.hits : [...prevState.gallery, ...gallery.hits],
          status: 'resolved',
          page: prevState.page + 1,
        }));
      })
      .catch(error => this.setState({ error, status: 'rejected' }));
  };

  componentDidUpdate(prevProps) {
    const { search } = this.props;

    if (prevProps.search !== search) {
      this.setState({ status: 'pending' });
      this.loadImages();
    }
  }

  handleLoadMoreClick = () => {
    this.loadImages();
  };

  handleimageClick = largeImage => {
    this.setState({ largeImage, isShowModal: true });
  };

  handleLargeImageClose = () => {
    this.setState({ isShowModal: false });
  };

  render() {
    const { status, gallery, error, isShowModal, largeImage } = this.state;

    if (status === 'idle') {
      return <Start />;
    }

    if (status === 'pending') {
      return <Loader />;
    }

if (status === 'rejected') {
  return <Error message={error.message} />;
}

    if (gallery.length === 0) {
      return <Error message={'Ooops, try again'} />;
    }

    if (status === 'resolved') {
      return (
        <>
          {' '}
          <ul className={css.imageGallery}>
            <ImageGalleryItem
              gallery={gallery}
              onClick={this.handleimageClick}
            />
          </ul>
          <Button onCLick={this.handleLoadMoreClick} />
          {isShowModal && (
            <Modal
              largeImage={largeImage}
              onModalClose={this.handleLargeImageClose}
            />
          )}
        </>
      );
    }

    
  }
}
