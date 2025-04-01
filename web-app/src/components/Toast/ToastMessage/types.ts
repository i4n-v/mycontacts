type IToastTypes = 'default' | 'danger' | 'success';

interface IToastMessageProps {
  type?: IToastTypes;
  text: string;
}

type IContainerProps = Required<Pick<IToastMessageProps, 'type'>>;

export type { IToastMessageProps, IContainerProps };
