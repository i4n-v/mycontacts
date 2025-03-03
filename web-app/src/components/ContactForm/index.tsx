import { FormGroup, Input, Select } from '@/components';
import { Form, FormButton } from './styles';
import { IContactForm } from './types';

export default function ContactForm({ buttonLabel }: IContactForm) {
  return (
    <Form>
      <FormGroup>
        <Input placeholder="Nome" />
      </FormGroup>
      <FormGroup>
        <Input placeholder="E-mail" />
      </FormGroup>
      <FormGroup>
        <Input placeholder="Telefone" />
      </FormGroup>
      <FormGroup>
        <Select>
          <option value="option1">Instagram</option>
        </Select>
      </FormGroup>
      <FormButton type="submit">{buttonLabel}</FormButton>
    </Form>
  );
}
