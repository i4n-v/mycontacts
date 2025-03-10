import { useState } from 'react';

interface IFormError<T> {
  field: T;
  message: string;
}

export default function useErrors<T = string>() {
  const [errors, setErrors] = useState<IFormError<T>[]>([]);

  function addError(error: IFormError<T>) {
    const errorAlreadyExists = errors.some((err) => err.field === error.field);

    if (!errorAlreadyExists) {
      setErrors((errors) => [...errors, error]);
    }
  }

  function removeError(fieldName: T) {
    setErrors((errors) => errors.filter((error) => error.field !== fieldName));
  }

  function getErrorMessageByFieldName(fieldName: T) {
    const error = errors.find((error) => error.field === fieldName);
    return error?.message;
  }

  return {
    errors,
    addError,
    removeError,
    getErrorMessageByFieldName,
  };
}
