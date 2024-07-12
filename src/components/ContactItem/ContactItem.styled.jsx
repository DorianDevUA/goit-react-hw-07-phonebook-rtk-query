import styled from 'styled-components';
import IconButton from 'components/IconButton';

export const ContactCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ContactInfo = styled.ul`
  padding: 0;
  list-style: none;
`;

export const ContactName = styled.li``;

export const StyledIconBtn = styled(IconButton)`
  padding: 0;
  background-color: inherit;

  border: none;
  border-radius: 50%;
  cursor: pointer;

  &:hover {
    color: red;
  }

  svg {
    display: block;
  }
`;
