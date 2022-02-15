import React from 'react';
import TextField from '@mui/material/TextField';

function FormField({
  onChange, id, type, label, value,
}) {
  return (
    <TextField
      id={id}
      key={id}
      type={type}
      label={label}
      margin="dense"
      value={value}
      onChange={onChange}
    />
  );
}

export default FormField;
