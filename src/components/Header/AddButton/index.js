import React from 'react';
import Button from '@mui/material/Button';

// eslint-disable-next-line react/prop-types
function AddButton({ onClick, title }) {
  return (
    <Button
      type="button"
      size="medium"
      variant="contained"
      onClick={onClick}
    >
      {title}
    </Button>
  );
}

export default AddButton;
