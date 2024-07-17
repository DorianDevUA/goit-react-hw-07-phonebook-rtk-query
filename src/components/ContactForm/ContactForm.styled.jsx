import { Form } from 'formik';
import styled from 'styled-components';

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4px;
  border: 1px solid black;
  border-radius: 4px;
`;

export const StyledLabel = styled.label`
  display: block;
`;

export const LabelTitle = styled.span`
  display: block;
`;

export const StyledButton = styled.button`
  padding: 4px;
  margin-top: 4px;
  max-width: fit-content;
  color: white;
  background-color: rgb(76, 175, 80);
  border: none;
  border-radius: 4px;
`;
