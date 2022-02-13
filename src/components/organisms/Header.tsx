import { Anchor, FlexRow, HeaderSearchAdd, HeaderContainer } from 'components';
import { Routes } from 'router';

export const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Anchor to={Routes.Main}>Home</Anchor>
      <HeaderSearchAdd />
    </HeaderContainer>
  );
};
