import { PropsWithChildren } from 'react';

type IFormGroupProps = PropsWithChildren<{
  error?: string;
  isLoading?: boolean;
}>;

export type { IFormGroupProps };
