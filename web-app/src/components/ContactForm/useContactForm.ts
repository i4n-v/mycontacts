import { ICategoryDomain } from '@/@types/Category';
import { cleanupString, formatPhone, isEmailValid } from '@/utils';
import { useEffect, useImperativeHandle, useState } from 'react';
import { IContactFormProps, IContactFormRef, IContactFormValues } from './types';
import { useErrors } from '@/hooks';
import { CategoriesService } from '@/services';

export default function useContactForm(
  ref: React.ForwardedRef<IContactFormRef>,
  onSubmit: IContactFormProps['onSubmit'],
) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [categoryId, setCategoryId] = useState('');
  const [isLoadingCategories, setIsLoadingCategories] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [categories, setCategories] = useState<ICategoryDomain[]>([]);
  const { getErrorMessageByFieldName, addError, removeError, errors } =
    useErrors<keyof IContactFormValues>();

  const isFormValid = name && !errors.length;

  useImperativeHandle(
    ref,
    () => ({
      setFieldsValues: (contact) => {
        setName(contact.name);
        setEmail(contact.email ?? '');
        setPhone(contact.phone ? formatPhone(contact.phone) : '');
        setCategoryId(contact.categoryId ?? '');
      },
      resetFields: () => {
        setName('');
        setEmail('');
        setPhone('');
        setCategoryId('');
      },
    }),
    [],
  );

  useEffect(() => {
    const abortController = new AbortController();

    async function loadCategories() {
      try {
        setIsLoadingCategories(true);
        const categories = await CategoriesService.listCategories(abortController.signal);
        setCategories(categories);
      } catch {
      } finally {
        setIsLoadingCategories(false);
      }
    }

    loadCategories();

    return () => {
      abortController.abort();
    };
  }, []);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setIsSubmitting(true);

    await onSubmit({
      name,
      email,
      phone: cleanupString(phone, [/\D/g]),
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

  return {
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
  };
}
