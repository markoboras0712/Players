import { GridContainer, FlexRow, PlayerItem } from 'components';
import { useSelector } from 'react-redux';
import { Player, selectKeyword, usePlayers } from 'store';

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

interface Props {
  players: Player[];
}

export const PlayerList: React.FC<Props> = ({ players }) => {
  const keyword = useSelector(selectKeyword);
  const { useFilter } = usePlayers();
  const filteredPlayers = useFilter(keyword, players);

  return (
    <GridContainer>
      {filteredPlayers.map(
        ({ id, countryFlag, name, photo, position }: Player) => (
          <PlayerItem
            key={id}
            countryFlag={countryFlag}
            name={name}
            photo={photo}
            position={position}
          />
        ),
      )}
    </GridContainer>
  );
};
