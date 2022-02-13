import { Link } from '@reach/router';
import { Routes } from 'router';

export const PlayerDetail: React.FC = () => {
  return (
    <>
      <p>Page</p>
      <Link to={Routes.Main}>Back</Link>
      <br />
      <Link to={Routes.CreatePlayer}>CREATE PLAYER</Link>
    </>
  );
};
