import { useState } from 'react';
import styled from 'styled-components';

export const Button = styled.button`
  background-color: #708090;
  text-align: center;
  color: #dcdcdc;
  cursor: pointer;
  border-radius: 5px;
  padding: 10px 30px;
  border: none;
`;

interface Props {
  text: string;
  loading?: boolean;
  onClick?: (event: React.FormEvent) => void;
}

export const LoadingButton: React.FC<Props> = ({ text, loading, onClick }) => {
  return (
    <Button onClick={onClick}>
      {loading ? <i className="fa fa-spinner fa-spin"></i> : text}
    </Button>
  );
};
