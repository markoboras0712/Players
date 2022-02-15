import { FlexColumn, Header, CreatePlayerForm } from 'components';

export const CreatePlayer: React.FC = () => {
  return (
    <FlexColumn>
      <Header createPlayerPage />
      <CreatePlayerForm />
    </FlexColumn>
  );
};
