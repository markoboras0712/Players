import { Link } from '@reach/router';
import { Routes } from 'router';

export const CreatePlayer: React.FC = () => {
  return (
    <>
      <p>Page</p>
      <Link to={Routes.Main}>BACK</Link>
    </>
  );
};
