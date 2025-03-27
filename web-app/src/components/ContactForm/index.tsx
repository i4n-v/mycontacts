import { FormGroup, Input, Select } from '@/components';
import { Form, FormButton } from './styles';
import { IContactFormValues, IContactFormProps } from './types';
import { useEffect, useState } from 'react';
import { formatPhone, isEmailValid } from '@/utils';
import { useErrors } from '@/hooks';
import { CategoriesService } from '@/services';
import { ICategory } from '@/@types/Category';

export default function ContactForm({ buttonLabel, onSubmit }: IContactFormProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [categoryId, setCategoryId] = useState('');
  const [isLoadingCategories, setIsLoadingCategories] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [categories, setCategories] = useState<ICategory[]>([]);
  const { getErrorMessageByFieldName, addError, removeError, errors } =
    useErrors<keyof IContactFormValues>();

  const isFormValid = name && !errors.length;

  useEffect(() => {
    async function loadCategories() {
      try {
        setIsLoadingCategories(true);
        const categories = await CategoriesService.listCategories();
        setCategories(categories);
      } catch {
      } finally {
        setIsLoadingCategories(false);
      }
    }

    loadCategories();
  }, []);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setIsSubmitting(true);

    await onSubmit({
      name,
      email,
      phone,
      categoryId,
    });

    setIsSubmitting(false);
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
          disabled={isSubmitting}
        />
      </FormGroup>
      <FormGroup error={getErrorMessageByFieldName('email')}>
        <Input
          type="email"
          error={!!getErrorMessageByFieldName('email')}
          placeholder="E-mail"
          value={email}
          onChange={handleEmailChange}
          disabled={isSubmitting}
        />
      </FormGroup>
      <FormGroup>
        <Input
          placeholder="Telefone"
          value={phone}
          onChange={(event) => setPhone(formatPhone(event.target.value))}
          maxLength={15}
          disabled={isSubmitting}
        />
      </FormGroup>
      <FormGroup isLoading={isLoadingCategories}>
        <Select
          value={categoryId}
          disabled={isLoadingCategories || isSubmitting}
          onChange={(event) => setCategoryId(event.target.value)}
        >
          <option value="">Sem categoria</option>
          {categories.map(({ id, name }) => (
            <option key={id} value={id}>
              {name}
            </option>
          ))}
        </Select>
      </FormGroup>
      <FormButton type="submit" isLoading={isSubmitting} disabled={!isFormValid}>
        {buttonLabel}
      </FormButton>
    </Form>
  );
}
