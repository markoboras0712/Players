import {
  Anchor,
  FlexRow,
  HeaderSearchAdd,
  HeaderContainer,
  MarginLeftRow,
  AddPlayerAnchor,
  PlusSvg,
} from 'components';
import { Routes } from 'router';

export const PlayerDetailHeader: React.FC = () => {
  return (
    <HeaderContainer>
      <Anchor to={Routes.Main}>Back</Anchor>
      <MarginLeftRow>
        <AddPlayerAnchor to={Routes.CreatePlayer}>Add player</AddPlayerAnchor>
        <PlusSvg />
      </MarginLeftRow>
    </HeaderContainer>
  );
};
