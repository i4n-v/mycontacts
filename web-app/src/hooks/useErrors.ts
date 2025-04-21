import { useCallback, useState } from 'react';

interface IFormError<T> {
  field: T;
  message: string;
}

export default function useErrors<T = string>() {
  const [errors, setErrors] = useState<IFormError<T>[]>([]);

  const addError = useCallback(
    (error: IFormError<T>) => {
      const errorAlreadyExists = errors.some((err) => err.field === error.field);

      if (!errorAlreadyExists) {
        setErrors((errors) => [...errors, error]);
      }
    },
    [errors],
  );

  const removeError = useCallback((fieldName: T) => {
    setErrors((errors) => errors.filter((error) => error.field !== fieldName));
  }, []);

  const getErrorMessageByFieldName = useCallback(
    (fieldName: T) => {
      const error = errors.find((error) => error.field === fieldName);
      return error?.message;
    },
    [errors],
  );

  return {
    errors,
    addError,
    removeError,
    getErrorMessageByFieldName,
  };
}
