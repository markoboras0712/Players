import styled from 'styled-components';

export const CenteredWrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: 50px;
  padding: 80px 20px 50px;
  justify-content: space-around;
  align-content: space-evenly;
  @media (max-width: 1000px) {
    grid-gap: 25px;
  }
  @media (max-width: 810px) {
    grid-template-columns: auto auto;
  }
  @media (max-width: 590px) {
    grid-template-columns: auto;
  }
`;
//480, 768, 1024
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

export const PlayerContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PlayerDetailContainer = styled(PlayerContainer)`
  background-color: white;
  height: 100vh;
  padding: 40px;
  row-gap: 40px;
`;

export const PlayerFooterContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  width: 300px;
  background-color: #708090;
  padding: 10px;
  @media (max-width: 1000px) {
    width: 250px;
  }
`;

export const PlayerInformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 10px 3px 0px 10px;
`;
