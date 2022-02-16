import { useLocation } from '@reach/router';
import { FlexColumn, Header, PlayerInformation } from 'components';

export const PlayerDetail: React.FC = () => {
  const location = useLocation<{ myState: 'value' }>();
  const playerDetailData: any = location.state.myState;

  return (
    <FlexColumn>
      <Header playerDetailPage />
      <PlayerInformation
        description={playerDetailData.description}
        name={playerDetailData.name}
      />
    </FlexColumn>
  );
};
