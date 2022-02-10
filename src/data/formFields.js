// eslint-disable-next-line import/prefer-default-export
export function getFormFields(fields) {
  return [
    {
      id: 'username',
      label: 'User name',
      value: fields.username,
    },
    {
      id: 'email',
      label: 'E-mail',
      value: fields.email,
    },
    {
      id: 'name',
      label: 'Name',
      value: fields.name,
    },
  ];
}
