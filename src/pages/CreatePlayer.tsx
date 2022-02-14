import { Link } from '@reach/router';
import { CreatePlayerHeader, FlexColumn } from 'components';
import { CreatePlayerForm } from 'components/organisms/CreatePlayerForm';
import { Routes } from 'router';

export const CreatePlayer: React.FC = () => {
  return (
    <FlexColumn>
      <CreatePlayerHeader />
      <CreatePlayerForm />
    </FlexColumn>
  );
};
