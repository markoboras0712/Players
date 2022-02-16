import {
  Paragraph,
  PlayerDetailContainer,
  PlayerDetailHeading,
} from 'components';

interface Props {
  name: string;
  description: string;
}

export const PlayerInformation: React.FC<Props> = ({ name, description }) => {
  return (
    <PlayerDetailContainer>
      <Paragraph color="gray">{name}</Paragraph>
      <PlayerDetailHeading color="gray">{description}</PlayerDetailHeading>
    </PlayerDetailContainer>
  );
};
