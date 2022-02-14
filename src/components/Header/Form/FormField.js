import React from 'react';
import TextField from '@mui/material/TextField';
import { TextareaAutosize } from '@mui/material';

function FormField({
  // eslint-disable-next-line react/prop-types
  onChange, id, type, label, value, textArea,
}) {
  return textArea ? (
    <TextareaAutosize
      aria-label="minimum height"
      minRows={4}
      placeholder="Type comment.."
      style={{
        resize: 'vertical',
        minWidth: 350,
      }}
      id={id}
      key={id}
      type={type}
      label={label}
      margin="dense"
      value={value}
      onChange={onChange}
    />
  ) : (
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
