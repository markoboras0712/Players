import {
  MainHeader,
  FlexColumn,
  Player,
  Button,
  CenteredFlexbox,
  Select,
  SelectMenu,
  HorizontallyCenteredFlexbox,
  LoadingButton,
} from 'components';
import { PlayerList } from 'components/organisms/PlayerList';
import { useState } from 'react';

export const Home: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleOnClick = () => {
    if (isLoading) return;

    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 5000);
  };
  return (
    <FlexColumn>
      <MainHeader />
      <SelectMenu />
      <PlayerList />
      <HorizontallyCenteredFlexbox>
        <LoadingButton
          text="Load more"
          onClick={handleOnClick}
          loading={isLoading}
        />
      </HorizontallyCenteredFlexbox>
    </FlexColumn>
  );
};
