import {
  GridContainer,
  PlayerItem,
  HorizontallyCenteredFlexbox,
  LoadingButton,
  FlexColumn,
} from 'components';
import { useMemo, useState } from 'react';
import { Player, usePlayers } from 'store';

interface Props {
  players: Player[];
}

export const PlayerList: React.FC<Props> = ({ players }) => {
  const { filteredPlayers } = usePlayers();
  const [numberOfPlayersShown, setNumberOfPlayersShown] = useState(6);
  const [isLoading, setIsLoading] = useState(false);

  const showMore = () => {
    setIsLoading(true);
    if (numberOfPlayersShown === players.length) {
      setNumberOfPlayersShown(6);
      setIsLoading(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    setTimeout(() => {
      setIsLoading(false);
      if (numberOfPlayersShown + 3 <= players.length) {
        setNumberOfPlayersShown(numberOfPlayersShown + 3);
      } else {
        setNumberOfPlayersShown(players.length);
      }
    }, 700);
  };

  const itemsToShow = useMemo(() => {
    return filteredPlayers
      .slice(0, numberOfPlayersShown)
      .map(
        ({
          id,
          countryFlag,
          name,
          photo,
          position,
          nickname,
          description,
        }: Player) => (
          <PlayerItem
            key={id}
            id={id}
            countryFlag={countryFlag}
            name={name}
            photo={photo}
            description={description}
            position={position}
            nickname={nickname}
          />
        ),
      );
  }, [filteredPlayers, numberOfPlayersShown]);

  return (
    <FlexColumn>
      <GridContainer>
        {itemsToShow.length ? itemsToShow : 'Loading...'}
      </GridContainer>
      <HorizontallyCenteredFlexbox>
        {numberOfPlayersShown === players.length ? (
          <LoadingButton
            text="Return to first 6"
            onClick={showMore}
            loading={isLoading}
          />
        ) : (
          <LoadingButton
            text="Load more"
            onClick={showMore}
            loading={isLoading}
          />
        )}
      </HorizontallyCenteredFlexbox>
    </FlexColumn>
  );
};
