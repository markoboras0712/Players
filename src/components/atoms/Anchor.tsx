import { Link } from '@reach/router';
import styled from 'styled-components';

export const Anchor = styled(Link)`
  color: ${(props) => props.color || 'white'};
  text-decoration: none;
`;

export const ErrorAnchor = styled(Anchor)`
  font-size: 45px;
`;
