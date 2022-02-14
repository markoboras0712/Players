import {
  Description,
  Heading,
  Paragraph,
  PlayerContainer,
  PlayerDetailContainer,
  PlayerDetailHeading,
  PlayerDetailParagraph,
} from 'components';

export const PlayerInformation: React.FC = () => {
  return (
    <PlayerDetailContainer>
      <PlayerDetailParagraph>Player name</PlayerDetailParagraph>
      <PlayerDetailHeading>Player Description</PlayerDetailHeading>
    </PlayerDetailContainer>
  );
};
