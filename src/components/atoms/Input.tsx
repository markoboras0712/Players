import styled from 'styled-components';

export const SearchInput = styled.input.attrs(() => ({
  // we can define static props
  type: 'search',
}))`
  background-clip: padding-box;
  border: 1px solid #ced4da;
  height: 40px;
  ::placeholder,
  ::-webkit-input-placeholder {
    opacity: 0.2;
  }
  :-ms-input-placeholder {
    opacity: 0.2;
  }
`;
