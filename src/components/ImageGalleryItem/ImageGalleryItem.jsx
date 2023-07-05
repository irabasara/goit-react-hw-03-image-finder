import css from './image-gallery-item.module.css';

export const ImageGalleryItem = ({ gallery, onClick }) => {
  return gallery.map(img => {
    const { id, tags, webformatURL, largeImageURL } = img;

    return (
      <li
        key={id}
        className={css.galleryItem}
        onClick={e => {
          e.preventDefault();
          onClick({ largeImageURL, tags });
        }}
      >
        <img src={webformatURL} alt={tags} />
      </li>
    );
  });
};
