import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import css from './image-gallery.module.css';

export const ImageGallery = () => {
  return (
    <ul className={css.imageGallery}>
      {<ImageGalleryItem></ImageGalleryItem>}
    </ul>
  );
};
