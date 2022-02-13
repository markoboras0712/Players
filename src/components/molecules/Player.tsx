import {
  Avatar,
  FlexColumn,
  FlexRow,
  Heading,
  Paragraph,
  PlayerContainer,
  PlayerFooterContainer,
  PlayerInformationContainer,
  Thumbnail,
} from 'components';

export const Player: React.FC = () => {
  return (
    <PlayerContainer>
      <Thumbnail src={require('./messi.jpg')} />
      <PlayerFooterContainer>
        <Avatar src={require('./argentina.jpg')} />
        <PlayerInformationContainer>
          <Heading>Player position</Heading>
          <Paragraph>Player position</Paragraph>
        </PlayerInformationContainer>
      </PlayerFooterContainer>
    </PlayerContainer>
  );
};
