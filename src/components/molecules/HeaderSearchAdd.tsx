import { Link } from '@reach/router';
import {
  AddPlayerAnchor,
  PlusSvg,
  SearchInput,
  SearchSvg,
  FlexRow,
  SearchButton,
  MarginLeftRow,
} from 'components';
import { Fragment } from 'react';
import { Routes } from 'router';

export const HeaderSearchAdd: React.FC = () => {
  return (
    <MarginLeftRow>
      <SearchButton />
      <AddPlayerAnchor to={Routes.Player}>Add player</AddPlayerAnchor>
      <PlusSvg />
    </MarginLeftRow>
  );
};
