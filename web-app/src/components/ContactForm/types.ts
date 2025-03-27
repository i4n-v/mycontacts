interface IContactFormValues {
  name: string;
  email: string;
  phone: string;
  categoryId: string;
}

interface IContactFormProps {
  buttonLabel: string;
  onSubmit(values: IContactFormValues): Promise<void>;
}

export type { IContactFormValues, IContactFormProps };
