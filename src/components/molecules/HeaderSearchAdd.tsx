import {
  PlusSvg,
  SearchInput,
  SearchSvg,
  MarginLeftRow,
  Anchor,
} from 'components';
import { Routes } from 'router';

export const HeaderSearchAdd: React.FC = () => {
  return (
    <MarginLeftRow>
      <SearchInput placeholder="Search player" type="search" />
      <SearchSvg />
      <Anchor to={Routes.CreatePlayer} color="#dcdcdc">
        Add player
      </Anchor>
      <Anchor to={Routes.CreatePlayer}>
        <PlusSvg />
      </Anchor>
    </MarginLeftRow>
  );
};
