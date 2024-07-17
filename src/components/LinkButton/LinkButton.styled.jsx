import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  display: block;
  padding: 4px;
  color: white;
  background-color: steelblue;
  border: 1px solid gray;
  border-radius: 4px;

  svg {
    display: block;
  }
`;
