import { Searchbar } from 'components/Searchbar/Searchbar';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import css from './app.module.css';
import { Button } from 'components/Button/Button';
// import { Modal } from 'components/Modal/Modal';

export const App = () => {
  return (
    <div className={css.app}>
      <Searchbar></Searchbar>;<ImageGallery></ImageGallery>
      <Button></Button>
      {/* <Modal></Modal> */}
    </div>
  );
};
