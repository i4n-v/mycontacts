type IToastTypes = 'default' | 'danger' | 'success';

interface IToast {
  id: number;
  text: string;
  duration?: number;
  type: IToastTypes;
}

export type { IToastTypes, IToast };
