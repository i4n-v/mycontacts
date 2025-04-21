import { FormGroup, Input, Select } from '@/components';
import { Form, FormButton } from './styles';
import { IContactFormProps, IContactFormRef } from './types';
import { forwardRef } from 'react';
import { formatPhone } from '@/utils';
import useContactForm from './useContactForm';

const ContactForm = forwardRef<IContactFormRef, IContactFormProps>(
  ({ buttonLabel, onSubmit }, ref) => {
    const {
      isSubmitting,
      isLoadingCategories,
      categories,
      isFormValid,
      name,
      email,
      phone,
      categoryId,
      handleNameChange,
      handleEmailChange,
      setPhone,
      setCategoryId,
      handleSubmit,
      getErrorMessageByFieldName,
    } = useContactForm(ref, onSubmit);

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
  },
);

ContactForm.displayName = 'ContactForm';

export default ContactForm;
