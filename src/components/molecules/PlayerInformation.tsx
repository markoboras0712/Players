import {
  Paragraph,
  PlayerDetailContainer,
  PlayerDetailHeading,
} from 'components';

export const PlayerInformation: React.FC = () => {
  return (
    <PlayerDetailContainer>
      <Paragraph color="gray">Player name</Paragraph>
      <PlayerDetailHeading color="gray">Player Description</PlayerDetailHeading>
    </PlayerDetailContainer>
  );
};
