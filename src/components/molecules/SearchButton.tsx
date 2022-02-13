import { SearchInput, SearchSvg } from 'components';

export const SearchButton: React.FC = () => {
  return (
    <>
      <SearchInput placeholder="Search player" type="search" />
      <SearchSvg />
    </>
  );
};
