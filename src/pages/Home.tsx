import { FlexColumn, SelectMenu, Header, PlayerList } from 'components';
import { fetchPlayers, selectAllPlayers } from 'store';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export const Home: React.FC = () => {
  const dispatch = useDispatch();
  const players = useSelector(selectAllPlayers);

  useEffect(() => {
    dispatch(fetchPlayers());
  }, []);

  return (
    <FlexColumn>
      <Header mainPage />
      <SelectMenu />
      <PlayerList players={players} />
    </FlexColumn>
  );
};
