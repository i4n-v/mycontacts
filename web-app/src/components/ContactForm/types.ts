interface IContactFormValues {
  name: string;
  email: string;
  phone: string;
  categoryId: string;
}

interface IContactFormProps {
  buttonLabel: string;
  onSubmit(values: IContactFormValues): void;
}

export type { IContactFormValues, IContactFormProps };
