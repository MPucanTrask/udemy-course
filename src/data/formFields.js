// eslint-disable-next-line import/prefer-default-export
export function getFormFields(fields) {
  return [
    {
      id: 'first_name',
      title: 'firstName',
      label: 'First Name',
      value: fields.first_name,
    },
    {
      id: 'last_name',
      type: 'lastName',
      label: 'Last Name',
      value: fields.last_name,
    },
    {
      id: 'email',
      type: 'email',
      label: 'E-mail',
      value: fields.email,
    },
    {
      id: 'avatar',
      type: 'avatar',
      label: 'Avatar URL',
      value: fields.avatar,
    },
  ];
}
