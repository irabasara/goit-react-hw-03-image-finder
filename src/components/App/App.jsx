import { Searchbar } from 'components/Searchbar/Searchbar';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import css from './app.module.css';

export const App = () => {
  return (
    <div className={css.app}>
      <Searchbar></Searchbar>;<ImageGallery></ImageGallery>
    </div>
  );
};
