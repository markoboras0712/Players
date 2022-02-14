import { Anchor, HeaderContainer } from 'components';
import { Routes } from 'router';

export const CreatePlayerHeader: React.FC = () => {
  return (
    <HeaderContainer>
      <Anchor to={Routes.Main}>Back</Anchor>
    </HeaderContainer>
  );
};
