import { Component } from 'react';
import { Loader } from 'components/Loader/Loader';
import { Error } from 'components/Error/Error';
import { Start } from 'components/Start/Start';
import { Button } from 'components/Button/Button';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import css from './app.module.css';
import Gallery from '../../utils/pixabayAPI';

export class App extends Component {
  state = {
    search: '',
    page: 40,
    showBtn: false,
    gallery: [],
    isLoading: false,
    error: null,
  };

  handlerFormSubmit = search => {
    this.setState({
      search,
    });
  };

  componentDidUpdate(_, prevState) {
    const { search } = this.state;

    if (prevState.search !== search || prevState.page !== this.state.page) {
      this.setState({ isLoading: true });
      const { page, search } = this.state;

      Gallery.getGallery(search, page)
        .then(gallery => {
          this.setState(prevState => ({
            gallery: [...prevState.gallery, ...gallery.hits],
            showBtn: page < Math.ceil(gallery.totalHits / 12),
            isLoading: false,
          }));
        })
        .catch(error => this.setState({ error }));
    }
  }

  handleLoadMoreClick = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    const { search, showBtn, gallery, isLoading, error } = this.state;

    return (
      <div className={css.app}>
        <Searchbar onSubmit={this.handlerFormSubmit} />
        {!search && <Start />}
        <ImageGallery search={search} gallery={gallery} />
        {isLoading && <Loader />}
        {showBtn && <Button onCLick={this.handleLoadMoreClick} />}
        {error && <Error message={'Ooops, try again'} />}
      </div>
    );
  }
}
