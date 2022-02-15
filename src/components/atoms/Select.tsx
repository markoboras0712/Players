import styled from 'styled-components';

export const Select = styled.select`
  padding: 16px 20px;
  border-radius: 4px;
  color: black;
  background-color: #d3d3d3;
`;

interface Options {
  value: string;
  text: string;
}

export const SelectMenu: React.FC = () => {
  const options: Options[] = [
    { value: 'ascending', text: 'Sort Ascending(A-Z)' },
    { value: 'descdending', text: 'Sort Descdending(Z-A)' },
    { value: 'reset', text: 'Reset' },
  ];
  return (
    <Select>
      {options.map(({ value, text }) => (
        <option value={value} key={value}>
          {text}
        </option>
      ))}
    </Select>
  );
};
