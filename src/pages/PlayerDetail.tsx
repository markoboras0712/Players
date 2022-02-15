import { FlexColumn, Header, PlayerInformation } from 'components';

export const PlayerDetail: React.FC = () => {
  return (
    <FlexColumn>
      <Header playerDetailPage />
      <PlayerInformation />
    </FlexColumn>
  );
};
