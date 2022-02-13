import styled from 'styled-components';

export const FlexRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 20px;
`;

export const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MarginLeftRow = styled(FlexRow)`
  margin-left: auto;
  gap: 30px;
  @media (max-width: 590px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 0;
    gap: 0;
  }
`;
