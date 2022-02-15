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

interface Props {
  photo: string;
  countryFlag: string;
  name: string;
  position: string;
}

export const PlayerItem: React.FC<Props> = ({
  photo,
  countryFlag,
  name,
  position,
}) => {
  return (
    <Anchor to={Routes.Player}>
      <FlexColumn>
        <Thumbnail src={photo} />
        <PlayerFooterContainer>
          <Avatar src={countryFlag} />
          <PlayerInformationContainer>
            <Heading>{name}</Heading>
            <Paragraph>{position}</Paragraph>
          </PlayerInformationContainer>
        </PlayerFooterContainer>
      </FlexColumn>
    </Anchor>
  );
};
