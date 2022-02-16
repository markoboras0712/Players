import { useSelector } from 'react-redux';
import { Player, selectAllPlayers, selectKeyword } from 'store';

export const sortArrayByKeyAscending = (playerA: Player, playerB: Player) => {
  if (playerA.name < playerB.name) {
    return -1;
  }
  if (playerA.name > playerB.name) {
    return 1;
  }
  return 0;
};

export const sortArrayByKeyDescending = (playerA: Player, playerB: Player) => {
  if (playerA.name < playerB.name) {
    return 1;
  }
  if (playerA.name > playerB.name) {
    return -1;
  }
  return 0;
};

const useFilter = (keyword: string, players: Player[]) =>
  !!keyword.length
    ? players.filter(({ name }) =>
        name?.toLowerCase().includes(keyword.toLowerCase()),
      )
    : players;

export const usePlayers = () => {
  const keyword = useSelector(selectKeyword);
  const players = useSelector(selectAllPlayers);

  const filteredPlayers = useFilter(keyword, players);

  return { filteredPlayers };
};
