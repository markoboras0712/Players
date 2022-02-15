import styled from 'styled-components';
import PlusIcon from 'assets/add.svg';
import SearchIcon from 'assets/Search.svg';

export const PlusSvg = styled(PlusIcon)`
  height: 30px;
  width: 30px;
  cursor: pointer;
  @media (max-width: 660px) {
    display: none;
  }
`;

export const SearchSvg = styled(SearchIcon)`
  cursor: pointer;
  @media (max-width: 720px) {
    display: none;
  }
`;

//480, 768, 1024
