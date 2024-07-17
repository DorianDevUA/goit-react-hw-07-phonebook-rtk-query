import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  display: inline-block;
  padding: 4px;
  color: white;
  background-color: rgb(76, 175, 80);
  /* border: 1px solid gray; */
  border-radius: 4px;

  svg {
    display: block;
  }
`;
