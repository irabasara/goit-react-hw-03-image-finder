import css from './button.module.css';
import { Loader } from 'components/Loader/Loader';

export const Button = () => {
  return (
    <button type="button" className={css.button}>
      Load more{<Loader></Loader>}
    </button>
  );
};
