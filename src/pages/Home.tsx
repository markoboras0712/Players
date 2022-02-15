import {
  FlexColumn,
  SelectMenu,
  HorizontallyCenteredFlexbox,
  LoadingButton,
  Header,
  PlayerList,
} from 'components';
import { client, fetchPlayers } from 'store';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

export const Home: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPlayers());
  }, []);

  const handleOnClick = () => {
    if (isLoading) return;

    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 5000);
  };
  return (
    <FlexColumn>
      <Header mainPage />
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
