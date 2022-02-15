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
  @media (max-width: 530px) {
    display: flex;
    margin-top: 10px;
    gap: 10px;
    align-items: center;
    justify-content: center;
    padding-bottom: 10px;
  }
`;

export const HorizontallyCenteredFlexbox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 10px;
`;

export const CenteredFlexbox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;
