import css from './image-gallery-item.module.css';

export const ImageGalleryItem = ({ gallery }) => {
  return gallery.hits.map(img => {
    const { id, tags, webformatURL } = img;

    return (
      <li key={id} className={css.galleryItem}>
        <img src={webformatURL} alt={tags} />
      </li>
    );
  });
};
