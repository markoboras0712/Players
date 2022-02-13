import { Router, RouteComponentProps } from '@reach/router';
// import { Routes } from 'fixtures';

const RouterPage = (
  props: { pageComponent: JSX.Element } & RouteComponentProps,
) => props.pageComponent;

export const Routing: React.FC = () => {
  return (
    // <Router>
    //   <RouterPage path={Routes.Login} pageComponent={<Login />} />
    //   <RouterPage path={Routes.Register} pageComponent={<Registration />} />
    //   <RouterPage
    //     path={Routes.ForgotPassword}
    //     pageComponent={<ForgotPassword />}
    //   />
    //   <RouterPage path={Routes.Messages} pageComponent={<AllMessages />} />
    //   <RouterPage path={Routes.Contacts} pageComponent={<Contacts />} />
    //   <RouterPage path={Routes.Message} pageComponent={<Chat />} />
    //   <RouterPage path={Routes.NotFound} pageComponent={<NotFound />} />
    // </Router>
    <p>bit ce router</p>
  );
};
