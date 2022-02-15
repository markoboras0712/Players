import { GridContainer, FlexRow, Player } from 'components';

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export const PlayerList: React.FC = () => {
  return (
    <GridContainer>
      {cards.map((card) => (
        <Player key={card} />
      ))}
    </GridContainer>
  );
};
