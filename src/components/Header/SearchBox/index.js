import React from 'react';
import TextField from '@mui/material/TextField';

function SearchBox({ onChange }) {
  const disableEnter = (event) => event.key === 'Enter' && event.preventDefault();

  return (
    <TextField
      id="basic-search"
      label="Search monster"
      variant="outlined"
      placeholder="Search monsters.."
      onChange={onChange}
      onKeyPress={disableEnter}
    />
  );
}

export default SearchBox;
