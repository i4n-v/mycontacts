import { IContact } from '@/@types/Contact';

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

interface IContactFormRef {
  setFieldsValues(values: IContact): void;
  resetFields(): void;
}

export type { IContactFormValues, IContactFormProps, IContactFormRef };
