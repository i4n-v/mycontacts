import { ReactNode } from 'react';

interface IModalProps {
  isLoading?: boolean;
  visible: boolean;
  title: string;
  children: ReactNode;
  danger?: boolean;
  cancelLabel?: string;
  confirmLabel?: string;
  onCancel(): void;
  onConfirm(): void;
}

interface IOverlayProps {
  isLeaving: boolean;
}

type IContainerProps = Pick<IModalProps, 'danger'> & IOverlayProps;

export type { IModalProps, IOverlayProps, IContainerProps };
