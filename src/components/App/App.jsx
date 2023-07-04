import { Searchbar } from 'components/Searchbar/Searchbar';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import css from './app.module.css';
// import { Button } from 'components/Button/Button';
import { Component } from 'react';
// import { Modal } from 'components/Modal/Modal';

export class App extends Component {
  state = {
    search: '',
  };

  handlerFormSubmit = search => {
    this.setState({
      search,
    });
  };

  render() {
    return (
      <div className={css.app}>
        <Searchbar onSubmit={this.handlerFormSubmit} />
        <ImageGallery search={this.state.search} />
        {/* <Button></Button> */}
        {/* <Modal></Modal> */}
      </div>
    );
  }
}
