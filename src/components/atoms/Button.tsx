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
  :active {
    background-color: #1288ff;
  }
`;

interface Props {
  text: string;
  loading?: boolean;
  onClick?: (event: React.FormEvent) => void;
  onSubmit?: () => void;
  style?: React.CSSProperties;
  disabled?: boolean;
}

export const LoadingButton: React.FC<Props> = ({
  text,
  loading,
  onClick,
  onSubmit,
}) => {
  return (
    <Button onClick={onClick} onSubmit={onSubmit}>
      {loading ? <p>loading...</p> : text}
    </Button>
  );
};
