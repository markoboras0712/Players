import {
  FlexColumn,
  SelectMenu,
  HorizontallyCenteredFlexbox,
  LoadingButton,
  Header,
  PlayerList,
} from 'components';
import {
  client,
  fetchPlayers,
  reset,
  selectAllPlayers,
  sortAscending,
  sortDescending,
} from 'store';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export const Home: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const players = useSelector(selectAllPlayers);

  useEffect(() => {
    dispatch(fetchPlayers());
  }, []);
  console.log('aLL PLAYERS', players);

  const handleOnClick = () => {
    if (isLoading) return;

    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 5000);
  };
  return (
    <FlexColumn>
      <Header mainPage />
      <SelectMenu />
      <PlayerList players={players} />
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
