import { FormGroup, Input, Select } from '@/components';
import { Form, FormButton } from './styles';
import { IContactFormFields, IContactFormProps } from './types';
import { useState } from 'react';
import { formatPhone, isEmailValid } from '@/utils';
import { useErrors } from '@/hooks';

export default function ContactForm({ buttonLabel }: IContactFormProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [category, setCategory] = useState('instagram');
  const { getErrorMessageByFieldName, addError, removeError, errors } =
    useErrors<IContactFormFields>();

  const isFormValid = name && !errors.length;

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  function handleNameChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { value } = event.target;

    if (!value) {
      addError({ field: 'name', message: 'Nome é obrigatório.' });
    } else {
      removeError('name');
    }

    setName(value);
  }

  function handleEmailChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { value } = event.target;

    if (value && !isEmailValid(value)) {
      addError({ field: 'email', message: 'E-mail inválido.' });
    } else {
      removeError('email');
    }

    setEmail(value);
  }

  return (
    <Form onSubmit={handleSubmit} noValidate>
      <FormGroup error={getErrorMessageByFieldName('name')}>
        <Input
          error={!!getErrorMessageByFieldName('name')}
          placeholder="Nome *"
          value={name}
          onChange={handleNameChange}
        />
      </FormGroup>
      <FormGroup error={getErrorMessageByFieldName('email')}>
        <Input
          type="email"
          error={!!getErrorMessageByFieldName('email')}
          placeholder="E-mail"
          value={email}
          onChange={handleEmailChange}
        />
      </FormGroup>
      <FormGroup>
        <Input
          placeholder="Telefone"
          value={phone}
          onChange={(event) => setPhone(formatPhone(event.target.value))}
          maxLength={15}
        />
      </FormGroup>
      <FormGroup>
        <Select value={category} onChange={(event) => setCategory(event.target.value)}>
          <option value="instagram">Instagram</option>
        </Select>
      </FormGroup>
      <FormButton type="submit" disabled={!isFormValid}>
        {buttonLabel}
      </FormButton>
    </Form>
  );
}
