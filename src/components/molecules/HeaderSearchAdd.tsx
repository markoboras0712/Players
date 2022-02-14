import {
  AddPlayerAnchor,
  PlusSvg,
  SearchInput,
  SearchSvg,
  MarginLeftRow,
  PlusSvgAnchor,
} from 'components';
import { Routes } from 'router';

export const HeaderSearchAdd: React.FC = () => {
  return (
    <MarginLeftRow>
      <SearchInput placeholder="Search player" type="search" />
      <SearchSvg />
      <AddPlayerAnchor to={Routes.CreatePlayer}>Add player</AddPlayerAnchor>
      <PlusSvgAnchor to={Routes.CreatePlayer}>
        <PlusSvg />
      </PlusSvgAnchor>
    </MarginLeftRow>
  );
};
