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
  nickname: string;
  id: string;
  description: string;
}

export const PlayerItem: React.FC<Props> = ({
  photo,
  countryFlag,
  name,
  position,
  nickname,
  id,
  description,
}) => {
  return (
    <Anchor
      to={nickname === 'Dendi' ? Routes.Player : Routes.NotFound}
      key={id}
      state={{ myState: { name, description } }}
    >
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
