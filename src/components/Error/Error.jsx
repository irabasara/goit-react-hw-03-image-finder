import { TbFaceIdError } from 'react-icons/tb';

export const Error = ({ message }) => {
  return (
    <div>
      <p>{message}</p>
      <TbFaceIdError size="96" color="blue" />
    </div>
  );
};
