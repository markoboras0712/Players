import {
  Header,
  FlexColumn,
  Player,
  Button,
  CenteredFlexbox,
  Select,
  SelectMenu,
} from 'components';
import { PlayerList } from 'components/organisms/PlayerList';

export const Home: React.FC = () => {
  return (
    <FlexColumn>
      <Header />
      <SelectMenu />
      <PlayerList />
      <CenteredFlexbox>
        <Button type="button">Load more</Button>
      </CenteredFlexbox>
    </FlexColumn>
  );
};
