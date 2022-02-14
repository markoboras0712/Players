import {
  MainHeader,
  FlexColumn,
  Player,
  Button,
  CenteredFlexbox,
  Select,
  SelectMenu,
  HorizontallyCenteredFlexbox,
} from 'components';
import { PlayerList } from 'components/organisms/PlayerList';

export const Home: React.FC = () => {
  return (
    <FlexColumn>
      <MainHeader />
      <SelectMenu />
      <PlayerList />
      <HorizontallyCenteredFlexbox>
        <Button type="button">Load more</Button>
      </HorizontallyCenteredFlexbox>
    </FlexColumn>
  );
};
