import styled from 'styled-components';

export const SearchInput = styled.input.attrs(() => ({
  // we can define static props
  type: 'search',
}))`
  background-clip: padding-box;
  border: 1px solid #ced4da;
  height: 40px;
  padding: 10px;
  ::placeholder,
  ::-webkit-input-placeholder {
    opacity: 0.2;
  }
  :-ms-input-placeholder {
    opacity: 0.2;
  }
`;

export const Input = styled.input.attrs((props) => ({
  type: 'text',
  size: props.size || '0.7em',
}))`
  border: 2px solid white;
  border-radius: 5px;
  margin: ${(props) => props.size};
  padding: ${(props) => props.size};
`;


export const NumberInput = styled.input.attrs((props) => ({
  type: 'number',
  size: props.size || '0.7em',
}))`
  border: 2px solid white;
  border-radius: 5px;
  margin: ${(props) => props.size};
  padding: ${(props) => props.size};
`;

export const FileInput = styled.input.attrs((props) => ({
  type: 'file',
  size: props.size || '0.7em',
}))`
  border: 2px solid white;
  border-radius: 5px;
  margin: ${(props) => props.size};
  padding: ${(props) => props.size};
`;