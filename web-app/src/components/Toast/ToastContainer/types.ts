type IToastTypes = 'default' | 'danger' | 'success';

interface IToast {
  id: number;
  text: string;
  type: IToastTypes;
}

export type { IToastTypes, IToast };
