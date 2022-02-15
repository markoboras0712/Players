import { CenteredFlexbox, ErrorAnchor, Header } from 'components';
import { Fragment } from 'react';
import { Routes } from 'router';

export const NotFound: React.FC = () => {
  return (
    <Fragment>
      <Header playerDetailPage />
      <CenteredFlexbox>
        <ErrorAnchor to={Routes.Main} color={'black'}>
          Go back to main page
        </ErrorAnchor>
      </CenteredFlexbox>
    </Fragment>
  );
};
