import {
  Anchor,
  Avatar,
  FlexColumn,
  Heading,
  Paragraph,
  PlayerFooterContainer,
  PlayerInformationContainer,
  Thumbnail,
} from 'components';
import { Routes } from 'router';

export const Player: React.FC = () => {
  return (
    <Anchor to={Routes.Player}>
      <FlexColumn>
        <Thumbnail src={require('./messi.jpg')} />
        <PlayerFooterContainer>
          <Avatar src={require('./argentina.jpg')} />
          <PlayerInformationContainer>
            <Heading>Player position</Heading>
            <Paragraph>Player position</Paragraph>
          </PlayerInformationContainer>
        </PlayerFooterContainer>
      </FlexColumn>
    </Anchor>
  );
};
