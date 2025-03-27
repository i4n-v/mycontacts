import Spinner from '../Spinner';
import { StyledButton } from './styles';
import { IButtonProps } from './types';

export default function Button({ isLoading, children, disabled, ...props }: IButtonProps) {
  return (
    <StyledButton disabled={disabled || isLoading} {...props}>
      {isLoading ? <Spinner size={16} /> : children}
    </StyledButton>
  );
}
