import { Link } from '@reach/router';
import {
  Anchor,
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
import { Routes } from 'router';

export const Player: React.FC = () => {
  return (
    <Anchor to={Routes.Player}>
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
    </Anchor>
  );
};
