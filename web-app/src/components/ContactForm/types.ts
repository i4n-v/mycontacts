import { IContactDomain } from '@/@types/Contact';

type IContactFormValues = Omit<IContactDomain, 'id' | 'categoryName'>;

interface IContactFormProps {
  buttonLabel: string;
  onSubmit(values: IContactFormValues): Promise<void>;
}

interface IContactFormRef {
  setFieldsValues(values: IContactDomain): void;
  resetFields(): void;
}

export type { IContactFormValues, IContactFormProps, IContactFormRef };
