import { RefObject } from 'react';
import { IToast, IToastTypes } from '../types';

interface IToastMessageProps {
  animatedRef: RefObject<HTMLDivElement | null>;
  message: IToast;
  isLeaving: boolean;
  onRemoveMessage(id: IToast['id']): void;
}

interface IContainerProps {
  type: IToastTypes;
  isLeaving: boolean;
}

export type { IToastMessageProps, IContainerProps };
