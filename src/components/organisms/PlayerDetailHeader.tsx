import {
  Anchor,
  FlexRow,
  HeaderSearchAdd,
  HeaderContainer,
  MarginLeftRow,
  AddPlayerAnchor,
  PlusSvg,
  PlayerHeaderContainer,
} from 'components';
import { Routes } from 'router';

export const PlayerDetailHeader: React.FC = () => {
  return (
    <PlayerHeaderContainer>
      <Anchor to={Routes.Main}>Back</Anchor>
      <MarginLeftRow>
        <AddPlayerAnchor to={Routes.CreatePlayer}>Add player</AddPlayerAnchor>
        <PlusSvg />
      </MarginLeftRow>
    </PlayerHeaderContainer>
  );
};
