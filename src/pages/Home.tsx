import { Header, FlexColumn, Player } from 'components';
import { PlayerList } from 'components/organisms/PlayerList';

export const Home: React.FC = () => {
  return (
    <FlexColumn>
      <Header />
      <PlayerList />
    </FlexColumn>
  );
};
