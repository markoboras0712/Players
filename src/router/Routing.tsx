import { Router, RouteComponentProps } from '@reach/router';
import { Home, NotFound, PlayerDetail, CreatePlayer } from 'pages';
import { Routes } from 'router';

const RouterPage = (
  props: { pageComponent: JSX.Element } & RouteComponentProps,
) => props.pageComponent;

export const Routing: React.FC = () => {
  return (
    <Router>
      <RouterPage path={Routes.Main} pageComponent={<Home />} />
      <RouterPage path={Routes.CreatePlayer} pageComponent={<CreatePlayer />} />
      <RouterPage path={Routes.Player} pageComponent={<PlayerDetail />} />
      <RouterPage path={Routes.NotFound} pageComponent={<NotFound />} />
    </Router>
  );
};
