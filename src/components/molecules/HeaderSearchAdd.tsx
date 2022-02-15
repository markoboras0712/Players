import { PlusSvg, SearchInput, MarginLeftRow, Anchor } from 'components';
import { useDispatch } from 'react-redux';
import { Routes } from 'router';
import { addKeyword } from 'store';

export const HeaderSearchAdd: React.FC = () => {
  const dispatch = useDispatch();
  const handleChange = (e: { target: { value: string } }) => {
    dispatch(addKeyword(e.target.value));
  };
  return (
    <MarginLeftRow>
      <SearchInput
        placeholder="Search player"
        type="search"
        onChange={handleChange}
      />

      <Anchor to={Routes.CreatePlayer} color="#dcdcdc">
        Add player
      </Anchor>
      <Anchor to={Routes.CreatePlayer}>
        <PlusSvg />
      </Anchor>
    </MarginLeftRow>
  );
};
