import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Loader } from 'components/Loader/Loader';
import css from './image-gallery.module.css';
import { Component } from 'react';
import { Error } from 'components/Error/Error';
import { Start } from 'components/Start/Start';
import Gallery from '../utils/pixabayAPI';
// import { Button } from 'components/Button/Button';

export class ImageGallery extends Component {
  state = {
    gallery: null,
    error: null,
    status: 'idle',
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.search !== this.props.search) {
      this.setState({ status: 'pending' });
      Gallery.getGallery(this.props.search)
        .then(gallery => {
          this.setState({
            gallery,
            status: 'resolved',
          });
        })
        .catch(error => this.setState({ error, status: 'rejected' }));
    }
    if (this.state.error) {
      this.setState({ error: null });
    }
  }

  render() {
    const { status, gallery, error } = this.state;

    if (status === 'idle') {
      return <Start />;
    }

    if (status === 'pending') {
      return <Loader />;
    }

    if (status === 'resolved') {
      return (
        <ul className={css.imageGallery}>
          <ImageGalleryItem gallery={gallery} />
        </ul>
      );
    }

    if (status === 'rejected') {
      return <Error message={error.message} />;
    }
  }
}
