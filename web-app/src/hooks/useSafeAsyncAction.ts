import { useCallback } from 'react';
import useIsMounted from './useIsMounted';

type IAsyncAction = () => void;

export default function useSafeAsyncAction() {
  const isMounted = useIsMounted();

  const runSafeAsyncAction = useCallback(
    (callback: IAsyncAction) => {
      if (isMounted()) {
        callback();
      }
    },
    [isMounted],
  );

  return runSafeAsyncAction;
}
