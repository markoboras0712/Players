import styled from 'styled-components';

const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
`;

const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: 80px;
  padding: 80px 20px 50px;
  justify-content: space-around;
  align-content: space-evenly;
  @media (max-width: 1100px) {
    grid-gap: 25px;
  }
  @media (max-width: 810px) {
    grid-template-columns: auto auto;
  }
  @media (max-width: 590px) {
    grid-template-columns: auto;
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  background-color: #708090;
  padding: 10px 25px;
  @media (max-width: 660px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const PlayerHeaderContainer = styled(HeaderContainer)`
  height: 60px;
`;

export const PlayerDetailContainer = styled(FlexColumn)`
  height: 100vh;
  padding: 40px;
  row-gap: 40px;
`;

export const PlayerFooterContainer = styled(FlexRow)`
  align-items: center;
  width: 300px;
  background-color: #708090;
  padding: 10px;
  @media (max-width: 1000px) {
    width: 250px;
    height: 110px;
  }
  @media (min-width: 1350px) {
    width: 440px;
    height: 110px;
  }
`;

export const PlayerInformationContainer = styled(FlexColumn)`
  padding: 10px 3px 0px 10px;
`;
