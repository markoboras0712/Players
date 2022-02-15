import styled from 'styled-components';

export const FlexRow = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MarginLeftRow = styled(FlexRow)`
  margin-left: auto;
  align-items: center;
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

export const HorizontallyCenteredFlexbox = styled(FlexRow)`
  align-items: center;
  justify-content: center;
  padding-bottom: 20px;
`;

export const CenteredFlexbox = styled(FlexRow)`
  align-items: center;
  justify-content: center;
  height: 100vh;
`;
