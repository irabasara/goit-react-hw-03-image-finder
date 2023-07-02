// import css from './loader.module.css';
import { RotatingLines } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <RotatingLines
      strokeColor="#fff"
      strokeWidth="3"
      animationDuration="1"
      width="24"
      visible={true}
    />
  );
};
