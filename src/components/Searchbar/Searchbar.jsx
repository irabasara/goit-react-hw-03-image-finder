import css from './searchbar.module.css';
import { BsSearch } from 'react-icons/bs';

export const Searchbar = () => {
  return (
    <>
      <header className={css.searchbar}>
        <form className={css.searchForm}>
          <button type="submit" className={css.button}>
            <span>{<BsSearch size="18px" />}</span>
          </button>

          <input
            className={css.input}
            type="text"
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    </>
  );
};
