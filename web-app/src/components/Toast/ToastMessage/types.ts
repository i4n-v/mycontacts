import { IToast } from '../types';

interface IToastMessageProps {
  message: IToast;
  onRemoveMessage(id: IToast['id']): void;
}

type IContainerProps = Required<Pick<IToast, 'type'>>;

export type { IToastMessageProps, IContainerProps };
