import styled from 'styled-components';

export const Thumbnail = styled.img`
  width: 300px;
  border-radius: 25px 25px 0px 0px;
  height: 300px;
  @media (max-width: 1000px) {
    width: 250px;
    height: 250px;
  }
`;

export const Avatar = styled.img`
  vertical-align: middle;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  padding: 5px;
`;
