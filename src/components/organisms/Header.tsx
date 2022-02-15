import {
  Anchor,
  HeaderSearchAdd,
  HeaderContainer,
  PlayerHeaderContainer,
  MarginLeftRow,
  PlusSvg,
} from 'components';
import { Routes } from 'router';

interface Props {
  mainPage?: boolean;
  playerDetailPage?: boolean;
  createPlayerPage?: boolean;
}

export const Header: React.FC<Props> = ({
  mainPage,
  playerDetailPage,
  createPlayerPage,
}) => {
  return (
    <>
      {mainPage && (
        <HeaderContainer>
          <Anchor to={Routes.Main}>Home</Anchor>
          <HeaderSearchAdd />
        </HeaderContainer>
      )}
      {playerDetailPage && (
        <PlayerHeaderContainer>
          <Anchor to={Routes.Main}>Back</Anchor>
          <MarginLeftRow>
            <Anchor to={Routes.CreatePlayer} color="#dcdcdc">
              Add player
            </Anchor>
            <PlusSvg />
          </MarginLeftRow>
        </PlayerHeaderContainer>
      )}
      {createPlayerPage && (
        <PlayerHeaderContainer>
          <Anchor to={Routes.Main}>Back</Anchor>
        </PlayerHeaderContainer>
      )}
    </>
  );
};
