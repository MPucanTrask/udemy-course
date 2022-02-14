import { useState } from 'react';

// eslint-disable-next-line import/prefer-default-export
export function useFormFields(initialState) {
  const [fields, setValues] = useState(initialState);

  return [
    fields,
    (event) => {
      setValues({
        ...fields,
        [event.target.id]: event.target.value,
      });
    },
  ];
}
