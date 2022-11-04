import { useState } from 'react';

export const useForm = (initialState = {}) => {
  const [formState, setFormState] = useState(initialState);

  const reset = () => {
    setFormState(initialState);
  };

  const handleInputChange = ({ target }) => {
    const { name } = target;
    setFormState({
      ...formState,
      [name]: target.value,
    });
  };

  const multipleHandleSelectChange = ({ target }) => {
    const { name, value } = target;
    const item = typeof value === 'string' ? value.split(',') : value;
    setFormState({
      ...formState,
      [name]: [...item],
    });
  };

  return {
    formState,
    handleInputChange,
    multipleHandleSelectChange,
    reset,
  };
};
