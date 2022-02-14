import styled from 'styled-components';

export const Select = styled.select`
  padding: 16px 20px;
  border: none;
  border-radius: 4px;
  color: black;
  background-color: #D3D3D3;
  width: (100% - 250px);
`;

export const SelectMenu: React.FC = () => {
  return (
    <Select>
      <option value="ascending">Sort Ascending(A-Z)</option>
      <option value="descdending">Sort Descdending(Z-A)</option>
      <option value="reset">Reset</option>
    </Select>
  );
};
