import { Link } from '@reach/router';
import { FlexColumn, PlayerDetailHeader, PlayerInformation } from 'components';
import { Routes } from 'router';

export const PlayerDetail: React.FC = () => {
  return (
    <FlexColumn>
      <PlayerDetailHeader />
      <PlayerInformation />
    </FlexColumn>
  );
};
