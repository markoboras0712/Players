import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { reset, sortAscending, sortDescending } from 'store';
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
  const dispatch = useDispatch();
  const [selectedOption, setSelectedOption] = useState(options[2].value);
  console.log('selected option', selectedOption);
  useEffect(() => {
    if (selectedOption === 'ascending') {
      dispatch(sortAscending());
    }
    if (selectedOption === 'descdending') {
      dispatch(sortDescending());
    }
    if (selectedOption === 'reset') {
      dispatch(reset());
    }
  }, [selectedOption]);
  return (
    <Select
      value={selectedOption}
      onChange={(e) => setSelectedOption(e.target.value)}
    >
      {options.map(({ value, text }) => (
        <option value={value} key={value}>
          {text}
        </option>
      ))}
    </Select>
  );
};
