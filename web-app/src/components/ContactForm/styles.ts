import styled from 'styled-components';
import { Button } from '..';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const FormButton = styled(Button)`
  margin-top: 8px;
`;

export { Form, FormButton };
