import {
  AddPlayerAnchor,
  Anchor,
  CenteredFlexbox,
  ErrorAnchor,
} from 'components';
import { Routes } from 'router';

export const NotFound: React.FC = () => {
  return (
    <CenteredFlexbox>
      <ErrorAnchor to={Routes.Main}>Go back to main page</ErrorAnchor>
    </CenteredFlexbox>
  );
};
