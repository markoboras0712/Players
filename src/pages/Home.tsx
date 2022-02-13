import { Link } from '@reach/router';
import { Routes } from 'router';

export const Home: React.FC = () => {
  return (
    <>
      <p>Page</p>
      <Link to={Routes.CreatePlayer}>Add player</Link>
      <br />
      <Link to={Routes.Player}> player detail</Link>
    </>
  );
};
