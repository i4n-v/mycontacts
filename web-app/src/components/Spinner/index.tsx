import { StyledSpinner } from './styles';
import { ISpinnerProps } from './types';

export default function Spinner({ size = 32, className }: ISpinnerProps) {
  return <StyledSpinner size={size} className={className} />;
}
