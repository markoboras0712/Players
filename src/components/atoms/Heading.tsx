import styled from 'styled-components';

export const Heading = styled.h1`
  color: ${(props) => props.color || '#white'};
`;
export const PlayerDetailHeading = styled(Heading)`
  font-size: 36px;
`;
