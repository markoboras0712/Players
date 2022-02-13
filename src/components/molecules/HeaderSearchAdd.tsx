import {
  AddPlayerAnchor,
  PlusSvg,
  SearchInput,
  SearchSvg,
  MarginLeftRow,
} from 'components';
import { Routes } from 'router';

export const HeaderSearchAdd: React.FC = () => {
  return (
    <MarginLeftRow>
      <SearchInput placeholder="Search player" type="search" />
      <SearchSvg />
      <AddPlayerAnchor to={Routes.Player}>Add player</AddPlayerAnchor>
      <PlusSvg />
    </MarginLeftRow>
  );
};
